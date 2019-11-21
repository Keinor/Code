const OFFSET_X = 8; // plus triangle-size
const OFFSET_Y = 8; // plus triangle-size

let dynamicAreaEl = document.querySelector('.dynamic-area');

// never use classes like this one in your real projects!
class Geometry {
    get parentCenterX() {
        return Math.floor(this.parentElRect.width / 2);
    }

    get parentStartX() {
        return this.parentElRect.left;
    }

    get parentEndY() {
         return this.parentElRect.bottom;
    }

    get centerX() {
        return Math.floor(this.elRect.width / 2);
    }
    get parentHeight(){
        return this.parentElRect.height;
    }

    get windowStartX() {
        return OFFSET_X;
    }

    get parentStartY() {
        return this.parentElRect.top;
    }

    constructor({parentElRect, elRect}) {
        this.parentElRect = parentElRect;
        this.elRect = elRect;
    }

    tryOpenToTheBottom() {
        //(this.parentStartX); =200
        //(this.parentCenterX); =35
        //(this.centerX); = 80
        //(this.parentEndY); =222

        let x = this.parentStartX + this.parentCenterX - this.centerX;
        let y = this.parentEndY + OFFSET_Y;

        return {
            x,
            y
        }
    }

    tryOpenToTheLeft() {
        let x = this.parentStartX;
        let y = this.parentEndY + OFFSET_Y;

        return {x, y}
    }
    tryOpenToTheRight(){
        let x = getWindowWidth()-this.elRect.width;
        let y = this.parentEndY + OFFSET_Y;

        return {x, y}

    }
    tryOpenToTheTop(){
        let x = this.parentStartX + this.parentCenterX - this.centerX; //432
        let y = this.parentEndY -this.parentHeight- OFFSET_Y-this.elRect.height; //581

        return { x, y }
    }

    isValidX(x) {
        return x > getWindowWidth();
    }

    isValidY(y) {
        return y < getWindowHeight(); // and more then windowStartY
    }
    tryOpenToTheLeftCenter(){
        let x =this.parentStartX-OFFSET_X-this.elRect.width;
        let y = this.parentStartY+Math.floor(this.parentHeight/2)-Math.floor(this.elRect.height/2);

        return { x, y }
    }

    tryOpenToTheRightCenter(){
        let x =this.parentStartX+this.parentElRect.width+OFFSET_X;
        let y = this.parentStartY+Math.floor(this.parentHeight/2)-Math.floor(this.elRect.height/2);

        return { x, y }
    }

}

function getCoordinates({parentElRect, elRect}) {

    let geometry = new Geometry({parentElRect, elRect});
    let coords = geometry.tryOpenToTheBottom();

   let residue_Y = geometry.parentEndY + OFFSET_Y+geometry.elRect.height;

   if(residue_Y>getWindowHeight()){ //если подсказка пересекает нижнюю границу видимого окна
       if( (coords.x>0)&&(coords.x<getWindowWidth())){ // если по ширине начальная координата Х не заходит за грани правого и левого окон
           let indent = geometry.parentStartX-geometry.elRect.width-OFFSET_X;

           if (indent>0){  // если подсказка помещается влево
               let coords_left = geometry.tryOpenToTheLeftCenter(); //пытаемся разместить по середине влево

               if((coords_left.y+geometry.elRect.height)<getWindowHeight()){ // если подсказка помещается по высоте

                   return {
                       x: coords_left.x,
                       y: coords_left.y
                   }
               }
               else {
                   let coords_2 = geometry.tryOpenToTheTop(); // иначе открываем вверх
                   if(coords_2.x>0){
                       return {
                           x: coords_2.x,
                           y: coords_2.y
                       }
                   }
               }


           }else { //если не помещается влево
               let coords_2 = geometry.tryOpenToTheTop(); // открываем вверх
               if(coords_2.x>0){
                   return {
                       x: coords_2.x,
                       y: coords_2.y
                   }
               }
               }
       }
        else { // если не помещается вверх, левый край за гранью, то вправо
            let coords_4 = geometry.tryOpenToTheRightCenter();

            return {
                x: coords_4.x,
                y: coords_4.y
            }
        }
    }
   else { // если подсказка не пересекает нижнюю границу экрана

     if(coords.x<0){
        let coords_3 = geometry.tryOpenToTheLeft();
        return {
            x: coords_3.x,
            y: coords_3.y
        }
    }
    else if(geometry.isValidX(coords.x+geometry.elRect.width)){
        let coords_4 = geometry.tryOpenToTheRight();
        return {
            x: coords_4.x,
            y: coords_4.y
        }
    }
    else {
        return {
            x: coords.x,
            y: coords.y
        }
    }
   }
}

function open(toggleEl) {
    let originalPopupEl = toggleEl.nextElementSibling;
    let popupEl = originalPopupEl.cloneNode(true);
    popupEl.style.display = 'block';
    dynamicAreaEl.append(popupEl);

    // make sure you should recalculate window and toggleEl / popupEl positions every time when popup open
    let parentElRect = toggleEl.getBoundingClientRect();
    let elRect = popupEl.getBoundingClientRect();

    let coordinates = getCoordinates({parentElRect, elRect});

    popupEl.style.left = coordinates.x + 'px';
    popupEl.style.top = coordinates.y + 'px';
}

function closeAll() {
    dynamicAreaEl.innerHTML = '';
}

// obviously it's not the best example how to handle multiple items inside dynamic area

document.addEventListener('click', ($event) => {
    /**
     * @type {HTMLElement}
     */
    let el = $event.target;
    if (el.closest('.toggle')) {
        let isAnyOpened = dynamicAreaEl.children.length !== 0;
        if (isAnyOpened) {
            closeAll();
        } else {
            open(el);
        }
    } else {
        closeAll();
    }
});

// https://www.w3schools.com/jsref/prop_win_innerheight.asp
function getWindowHeight() {
    return window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
}

function getWindowWidth() {
    return window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
}

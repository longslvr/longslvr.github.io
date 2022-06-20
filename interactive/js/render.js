var ctx=canvas.getContext("2d"),actor=new Image;actor.src="./sprite/actor.png";var charSpriteWidth=128,charSpriteHeight=160,cols=4,rows=5,actorWidth=charSpriteWidth/cols,actorHeight=charSpriteHeight/rows,curFrame=0,frameCount=4,speed=8,objSpriteWidth=128,objSpriteHeight=32,objWidth=objSpriteWidth/4,objHeight=objSpriteHeight,chest=new Image;chest.src="./sprite/chest.png";var chestX=33*tile,chestY=1*tile,book=new Image;book.src="./sprite/book.png";var bookX=14*tile,bookY=2*tile,scroll=new Image;scroll.src="./sprite/scroll.png";var scrollX=23*tile,scrollY=2*tile,projDisplay=new Image;projDisplay.src="./sprite/display.png";var projDisplayX=16*tile,projDisplayY=19*tile,jobDisplay=new Image;jobDisplay.src="./sprite/display.png";var jobDisplayX=35*tile,jobDisplayY=16*tile,pivotX=0,pivotY=0;function updateFrame(){clearOldFrame(),checkModal();var a=0;switch(pivotX=(curFrame=++curFrame%frameCount)*actorWidth,pivotY=dir*actorWidth,dir){case 0:break;case 1:0!==(a=checkCollision(0,-speed))&&(currentY+=a);break;case 2:0!==(a=checkCollision(speed,0))&&(currentX+=a);break;case 3:0!==(a=checkCollision(0,speed))&&(currentY+=a);break;case 4:0!==(a=checkCollision(-speed,0))&&(currentX+=a)}}function drawActor(){updateFrame(),checkModal(),ctx.drawImage(actor,pivotX,pivotY,actorWidth,actorHeight,currentX,currentY,actorWidth,actorHeight)}function drawText(){ctx.clearRect(14*tile,tile,6*tile,tile),ctx.font="20px prstart",ctx.fillStyle="#dee0e2",ctx.textBaseline="top",ctx.fillText("Education",455,40),ctx.clearRect(31*tile,0,4*tile,tile),ctx.fillStyle="black",ctx.fillText("Skills",992,11),ctx.clearRect(15*tile,22*tile,23*tile,tile),ctx.fillStyle="black",ctx.fillText("School Projects",560,713),ctx.fillStyle="black",ctx.fillText("Experience",1e3,713)}function drawObj(){if(!started){var a=document.getElementsByClassName("noticeModal-body")[0];noticeModal.style.display="block",a.innerHTML="<h2 class='intro'>Hi, I am Long.</h2><p class='big'>Welcome to my world!</p><p class='big'>Unforternately this website does not support moble devices.</p><p class='big'>Press arrow keys to move around.</p><p class='big'>Look for the animated objects and sign boards.</p><p class='small'>Press anykey to continue.</p>"}drawText(),ctx.clearRect(chestX,chestY,objWidth,objHeight),ctx.drawImage(chest,pivotX,0,objWidth,objHeight,chestX,chestY,objWidth,objHeight),drawBook&&0==degree?(ctx.clearRect(bookX,bookY,objWidth,objHeight),ctx.drawImage(book,pivotX,0,objWidth,objHeight,bookX,bookY,objWidth,objHeight)):ctx.clearRect(bookX,bookY,objWidth,objHeight),ctx.clearRect(scrollX,scrollY,objWidth,objHeight),ctx.drawImage(scroll,pivotX,0,objWidth,objHeight,scrollX,scrollY,objWidth,objHeight),ctx.clearRect(projDisplayX,projDisplayY,objWidth,objHeight),ctx.drawImage(projDisplay,pivotX,0,objWidth,objHeight,projDisplayX,projDisplayY,objWidth,objHeight),ctx.clearRect(jobDisplayX,jobDisplayY,objWidth,objHeight),ctx.drawImage(jobDisplay,pivotX,0,objWidth,objHeight,jobDisplayX,jobDisplayY,objWidth,objHeight)}setInterval(drawActor,80),setInterval(drawObj,240)
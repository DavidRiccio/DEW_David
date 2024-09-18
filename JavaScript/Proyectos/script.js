function initCanvas(){
    let ctx = document.getElementById("my_canvas").getContext('2d');
    let background = new Image();
    let naveImage = new Image();
    let enemy1 = new Image();
    let enemy2 = new Image();
    background.src = "/JavaScript/Proyectos/img/wall.jpg";
    naveImage.src = "/JavaScript/Proyectos/img/nave1.png";
    enemy1.src = "/JavaScript/Proyectos/img/nave2.png";
    enemy2.src = "/JavaScript/Proyectos/img/nave3.png";

    var cW = ctx.canvas.width; //700px
    var cH = ctx.canvas.height; //600px

    var enemyTemplate = function(options){
        return {
            id: options.id || '',
            x: options.x || '',
            y: options.y || '',
            w: options.w || '',
            h: options.h || '',
            image: options.image || enemy1
        }
    }

    var enemies = [
        new enemyTemplate({id: '1',x:100,y:-20,w:50,h:30}),
        new enemyTemplate({id: '2',x:225,y:-20,w:50,h:30}),
        new enemyTemplate({id: '3',x:350,y:-20,w:80,h:30}),
        new enemyTemplate({id: '4',x:100,y:-70,w:50,h:30}),
        new enemyTemplate({id: '5',x:225,y:-70,w:50,h:30}),
        new enemyTemplate({id: '6',x:350,y:-70,w:50,h:30}),
        new enemyTemplate({id: '7',x:475,y:-70,w:50,h:30}),
        new enemyTemplate({id: '8',x:600,y:-70,w:50,h:30}),
        new enemyTemplate({id: '9',x:475,y:-70,w:80,h:30}),
        new enemyTemplate({id: '10',x:600,y:-20,w:50,h:30}),

        new enemyTemplate({id: '11',x:100,y:-220,w:50,h:30,image:enemy2}),
        new enemyTemplate({id: '12',x:225,y:-220,w:50,h:30,image:enemy2}),
        new enemyTemplate({id: '13',x:350,y:-220,w:80,h:30,image:enemy2}),
        new enemyTemplate({id: '14',x:100,y:-270,w:80,h:30,image:enemy2}),
        new enemyTemplate({id: '15',x:225,y:-270,w:50,h:30,image:enemy2}),
        new enemyTemplate({id: '16',x:350,y:-270,w:50,h:30,image:enemy2}),
        new enemyTemplate({id: '17',x:600,y:-200,w:80,h:30,image:enemy2}),
        new enemyTemplate({id: '18',x:475,y:-200,w:50,h:30,image:enemy2}),
        new enemyTemplate({id: '19',x:600,y:-200,w:50,h:30,image:enemy2}),
    ]

    var renderEnemies = function(enemyList){
        for(var i = 0;i<enemyList.length;i++){
            ctx.drawImage(enemyList[i].image,enemyList[i].x,image,enemyList[i].y+=.5,image,enemyList[i].w,image,enemyList[i].h);
            launcher.hitDetectLowerLevel(enemyList[i]);
        }
    };

    function.Launcher(){
        (this.y = 500),
        (this.x= cW * 0.5 - 25),
        (this.w = 100),
        (this.h = 100),
        (this.direcccion),
        (this.bg = "white"),
        this.misiles = [];
    
        this.gameStatus = {
            over: false,
            message:"",
            fillStyle:"white",
            font:"italic bold 36px Arial, sans-serif",};

        this.render = function(){
            if (this.direcccion === "left"){
                this.x -=5;
            } else if (this.direcccion === "right"){A<<<arguments
                this.x +=5;
                
            }else if (this.direcccion === "downArrow"){
                this.y +=5;
            }else if (this.direcccion === "upArrow"){
                this.y -=5;};
            };
    };
};
window.addEventListener('load',function(event){
    initCanvas();



}
}
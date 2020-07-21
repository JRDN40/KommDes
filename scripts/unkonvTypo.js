$(document).ready(function() {
var activeEffect ='';
var fizzyText = function() {
    //setting props
    this.content = 'Dein Text hier';
    this.effect = 'ChannelSplit';
    this.family= 'Impact';
    this.size= 150;
    this.fill= '#ffffff';
    this.paddingLeft= 100;
    this.paddingRight= 100;
    this.paddingTop= 100;
    this.paddingBottom= 100;
    this.shouldmove = true;
  // Effect properties Channel
    this.uOffset = 0.0;
    this.uRotation = 0.0;
    this.uApplyBlur = false;
    this.uAnimateNoise = false;
    //effect properties Flies
    this.uPointCellWidth=0.01;
    this.uPointRadius =0.51;
    this.uDodge = false;
    this.uDodgeSpread = 0;
    //liquid
    this.uVolatility =0.1;
    //Rolling
    this.uNoiseDistortVolatility = 0.1;
    this.uRotationRoll = 1;
    //Sliding
    this.uFlipAnimationDirection = true;
    this.uAnimateHorizontal = false;
    
};


  var text;
  var property = {};
    var props = new fizzyText();
    var gui = new dat.GUI();
    gui.remember(fizzyText);
    var f1 = gui.addFolder('Text Einstellungen');
    var f2 = gui.addFolder('Channel Split Einstellungen');
    var f3 = gui.addFolder('Flies Einstellungen');
    var f4 = gui.addFolder('Liquid Einstellungen');
    var f5 = gui.addFolder('Rolling Einstellungen');
    var f6 = gui.addFolder('Sliding Einstellungen');
    f1.open();
    f1.add(props, 'content').name("Texteingabe").onChange( function() {
            property.paddingLeft = 200;
            property.paddingRight = 200;
            property.paddingTop = 80;
            property.size =150;
        if(props.effect == 'Flies'){
            setTimeout(() => createFlies(), 1000)
        }else if(props.effect == 'ChannelSplit'){
            f2.open();
            setTimeout(() => createChannelSplit(), 1000)
        }else if(props.effect == 'Liquid'){
            setTimeout(() => createLiquid(), 1000)
        }else if(props.effect == 'Rolling'){
            setTimeout(() => createRolling(), 1000)
        }else if(props.effect == 'Sliding'){
            setTimeout(() => createSliding(), 1000)
        } 
       
    }

    );
    f1.add(props, 'size', 100, 300).name("Schriftgröße").onChange(function(){
       Object.defineProperties(property, {
            size: { value:props.size}
        }) 
        if(props.effect == 'Flies'){
            setTimeout(() => createFlies(), 1000)
        }else if(props.effect == 'ChannelSplit'){
            setTimeout(() => createChannelSplit(), 1000)
        }else if(props.effect == 'Liquid'){
            setTimeout(() => createLiquid(), 1000)
        }else if(props.effect == 'Rolling'){
            setTimeout(() => createRolling(), 1000)
        }else if(props.effect == 'Sliding'){
            setTimeout(() => createSliding(), 1000)
        }  
      
    })
    f1.add(props, 'effect', ['ChannelSplit', 'Flies', 'Liquid', 'Rolling', 'Sliding' ] ).name("Effekt wählen").onChange(function(){
        if(props.effect == 'Flies'){
            property.fill = '#ffffff';
            setTimeout(() => createFlies(), 1000)  
            f3.open();
            f2.close();
            f4.close();
            f5.close();
            f6.close();
        }else if(props.effect == 'ChannelSplit'){
                        f2.open()
                        f3.close();
                        f4.close();
                        f5.close();
                        f6.close();
            setTimeout(() => createChannelSplit(), 1000)
        }else if(props.effect == 'Liquid'){
                        property.fill = '#ffffff';
                        f2.close();
                        f3.close();
                        f4.open();
                        f5.close();
                        f6.close();
            setTimeout(() => createLiquid(), 1000)
        }else if(props.effect == 'Rolling'){
                        property.fill = '#ffffff';
                        f2.close();
                        f3.close();
                        f4.close();
                        f5.open();
                        f6.close();
            setTimeout(() => createRolling(), 1000)
        }else if(props.effect == 'Sliding'){
                        property.fill = '#ffffff';
                        f2.close();
                        f3.close();
                        f4.close();
                        f5.close();
                        f6.open();
            setTimeout(() => createSliding(), 1000)
        }
    }

    );

    f1.add(props, 'family', [ 'Impact','Charcoal','sans-serif' ]).name("Schriftart").onChange( function () {
        Object.defineProperties(property, {
            family: { value:props.family}
        })
        if(props.effect == 'Flies'){
            setTimeout(() => createFlies(), 1000)
        }else if(props.effect == 'ChannelSplit'){
            setTimeout(() => createChannelSplit(), 1000)
        }else if(props.effect == 'Liquid'){
            setTimeout(() => createLiquid(), 1000)
        }else if(props.effect == 'Rolling'){
            setTimeout(() => createRolling(), 1000)
        }else if(props.effect == 'Sliding'){
            setTimeout(() => createSliding(), 1000)
        }
    });
    

    
    f1.addColor(props, 'fill').name("Farbe").onChange(function() {
        Object.defineProperties(property, {
            fill: { value:props.fill}
        })
        if(props.effect == 'Flies'){
            setTimeout(() => createFlies(), 1000)
        }else if(props.effect == 'ChannelSplit'){
            setTimeout(() => createChannelSplit(), 1000)
        }else if(props.effect == 'Liquid'){
            setTimeout(() => createLiquid(), 1000)
        }else if(props.effect == 'Rolling'){
            setTimeout(() => createRolling(), 1000)
        }else if(props.effect == 'Sliding'){
            setTimeout(() => createSliding(), 1000)
        } 
    });
    f1.add(props, 'paddingLeft', 80, 180).onChange(function() {
        Object.defineProperties(property, {
            paddingLeft: { value:props.paddingLeft}
        })
        if(props.effect == 'Flies'){
            setTimeout(() => createFlies(), 1000)
        }else if(props.effect == 'ChannelSplit'){
            setTimeout(() => createChannelSplit(), 1000)
        }else if(props.effect == 'Liquid'){
            setTimeout(() => createLiquid(), 1000)
        }else if(props.effect == 'Rolling'){
            setTimeout(() => createRolling(), 1000)
        }else if(props.effect == 'Sliding'){
            setTimeout(() => createSliding(), 1000)
        }
    });
    f1.add(props, 'paddingRight', 80, 180).onChange(function() {
        Object.defineProperties(property, {
            paddingRight: { value:props.paddingRight}
        })
        if(props.effect == 'Flies'){
            setTimeout(() => createFlies(), 1000)
        }else if(props.effect == 'ChannelSplit'){
            setTimeout(() => createChannelSplit(), 1000)
        }else if(props.effect == 'Liquid'){
            setTimeout(() => createLiquid(), 1000)
        }else if(props.effect == 'Rolling'){
            setTimeout(() => createRolling(), 1000)
        }else if(props.effect == 'Sliding'){
            setTimeout(() => createSliding(), 1000)
        }
    })
    f1.add(props, 'paddingTop', 80, 180).onChange(function() {
        Object.defineProperties(property, {
            paddingTop: { value:props.paddingTop}
        })
        if(props.effect == 'Flies'){
            setTimeout(() => createFlies(), 1000)
        }else if(props.effect == 'ChannelSplit'){
            setTimeout(() => createChannelSplit(), 1000)
        }else if(props.effect == 'Liquid'){
            setTimeout(() => createLiquid(), 1000)
        }else if(props.effect == 'Rolling'){
            setTimeout(() => createRolling(), 1000)
        }else if(props.effect == 'Sliding'){
            setTimeout(() => createSliding(), 1000)
        }
    })
    f1.add(props, 'paddingBottom', 80, 180).onChange(function() {
        Object.defineProperties(property, {
            paddingBottom: { value:props.paddingBottom}
        })
        if(props.effect == 'Flies'){
            setTimeout(() => createFlies(), 1000)
        }else if(props.effect == 'ChannelSplit'){
            setTimeout(() => createChannelSplit(), 1000)
        }else if(props.effect == 'Liquid'){
            setTimeout(() => createLiquid(), 1000)
        }else if(props.effect == 'Rolling'){
            setTimeout(() => createRolling(), 1000)
        }else if(props.effect == 'Sliding'){
            setTimeout(() => createSliding(), 1000)
        }
    })
    
        f2.add(props, 'uApplyBlur').name("Blur").onChange(function() {
        Object.defineProperties(property, {
            uApplyBlur: { value:props.uApplyBlur,
                        configurable:true}
        })
        if(props.effect == 'Flies'){
            setTimeout(() => createFlies(), 1000)
        }else if(props.effect == 'ChannelSplit'){
            setTimeout(() => createChannelSplit(), 1000)
        }else if(props.effect == 'Liquid'){
            setTimeout(() => createLiquid(), 1000)
        }else if(props.effect == 'Rolling'){
            setTimeout(() => createRolling(), 1000)
        }else if(props.effect == 'Sliding'){
            setTimeout(() => createSliding(), 1000)
        }
    })
    
            f2.add(props, 'uAnimateNoise').name("Noise Animation").onChange(function() {
        Object.defineProperties(property, {
            uAnimateNoise: { value:props.uAnimateNoise,
                        configurable:true}
        })
        if(props.effect == 'Flies'){
            setTimeout(() => createFlies(), 1000)
        }else if(props.effect == 'ChannelSplit'){
            setTimeout(() => createChannelSplit(), 1000)
        }else if(props.effect == 'Liquid'){
            setTimeout(() => createLiquid(), 1000)
        }else if(props.effect == 'Rolling'){
            setTimeout(() => createRolling(), 1000)
        }else if(props.effect == 'Sliding'){
            setTimeout(() => createSliding(), 1000)
        }
    })
    
        f3.add(props, 'uPointCellWidth', 0, 0.1).name('Particle Radius').onChange(function() {
        Object.defineProperties(property, {
            uPointCellWidth: { value:props.uPointCellWidth,
                             configurable:true}
        })
        if(props.effect == 'Flies'){
            setTimeout(() => createFlies(), 1000)
        }else if(props.effect == 'ChannelSplit'){
            setTimeout(() => createChannelSplit(), 1000)
        }else if(props.effect == 'Liquid'){
            setTimeout(() => createLiquid(), 1000)
        }else if(props.effect == 'Rolling'){
            setTimeout(() => createRolling(), 1000)
        }else if(props.effect == 'Sliding'){
            setTimeout(() => createSliding(), 1000)
        }
    })

            f3.add(props, 'uPointRadius', 0.25, 1).name("Particle Anzahl").onChange(function() {
        Object.defineProperties(property, {
            uPointRadius: { value:props.uPointRadius,
                             configurable:true}
        })
        if(props.effect == 'Flies'){
            setTimeout(() => createFlies(), 1000)
        }else if(props.effect == 'ChannelSplit'){
            setTimeout(() => createChannelSplit(), 1000)
        }else if(props.effect == 'Liquid'){
            setTimeout(() => createLiquid(), 1000)
        }else if(props.effect == 'Rolling'){
            setTimeout(() => createRolling(), 1000)
        }else if(props.effect == 'Sliding'){
            setTimeout(() => createSliding(), 1000)
        }
    })
                f4.add(props, 'uVolatility', 0, 1).name("Verzerrung").onChange(function() {
        Object.defineProperties(property, {
            uVolatility: { value:props.uVolatility,
                             configurable:true}
        })
        if(props.effect == 'Flies'){
            setTimeout(() => createFlies(), 1000)
        }else if(props.effect == 'ChannelSplit'){
            setTimeout(() => createChannelSplit(), 1000)
        }else if(props.effect == 'Liquid'){
            setTimeout(() => createLiquid(), 1000)
        }else if(props.effect == 'Rolling'){
            setTimeout(() => createRolling(), 3000)
        }else if(props.effect == 'Sliding'){
            setTimeout(() => createSliding(), 1000)
        }
    })

                f5.add(props, 'uNoiseDistortVolatility', 0, 5).name("Distortion").onChange(function() {
        Object.defineProperties(property, {
            uNoiseDistortVolatility: { value:props.uNoiseDistortVolatility,
                             configurable:true}
        })
        if(props.effect == 'Flies'){
            setTimeout(() => createFlies(), 1000)
        }else if(props.effect == 'ChannelSplit'){
            setTimeout(() => createChannelSplit(), 1000)
        }else if(props.effect == 'Liquid'){
            setTimeout(() => createLiquid(), 1000)
        }else if(props.effect == 'Rolling'){
            setTimeout(() => createRolling(), 2000)
        }else if(props.effect == 'Sliding'){
            setTimeout(() => createSliding(), 1000)
        }
    })
    
                f5.add(props, 'uRotationRoll', 0, 360).name("Rotation").onChange(function() {
        Object.defineProperties(property, {
            uRotationRoll: { value:props.uRotationRoll,
                             configurable:true}
        })
        if(props.effect == 'Flies'){
            setTimeout(() => createFlies(), 1000)
        }else if(props.effect == 'ChannelSplit'){
            setTimeout(() => createChannelSplit(), 1000)
        }else if(props.effect == 'Liquid'){
            setTimeout(() => createLiquid(), 1000)
        }else if(props.effect == 'Rolling'){
            setTimeout(() => createRolling(), 1000)
        }else if(props.effect == 'Sliding'){
            setTimeout(() => createSliding(), 1000)
        }
    })
    
        f6.add(props, 'uFlipAnimationDirection').name("Umkehren").onChange(function() {
        Object.defineProperties(property, {
            uFlipAnimationDirection: { value:props.uFlipAnimationDirection,
                        configurable:true}
        })
        if(props.effect == 'Flies'){
            setTimeout(() => createFlies(), 1000)
        }else if(props.effect == 'ChannelSplit'){
            setTimeout(() => createChannelSplit(), 1000)
        }else if(props.effect == 'Liquid'){
            setTimeout(() => createLiquid(), 1000)
        }else if(props.effect == 'Rolling'){
            setTimeout(() => createRolling(), 1000)
        }else if(props.effect == 'Sliding'){
            setTimeout(() => createSliding(), 1000)
        }
    })
    
        f6.add(props, 'uAnimateHorizontal').name("Horizontal?").onChange(function() {
        Object.defineProperties(property, {
            uAnimateHorizontal: { value:props.uAnimateHorizontal,
                        configurable:true}
        })
        if(props.effect == 'Flies'){
            setTimeout(() => createFlies(), 1000)
        }else if(props.effect == 'ChannelSplit'){
            setTimeout(() => createChannelSplit(), 1000)
        }else if(props.effect == 'Liquid'){
            setTimeout(() => createLiquid(), 1000)
        }else if(props.effect == 'Rolling'){
            setTimeout(() => createRolling(), 1000)
        }else if(props.effect == 'Sliding'){
            setTimeout(() => createSliding(), 1000)
        }
    })
    
    

        /**f1.add(props, 'shouldmove').onChange(function() {
        Object.defineProperties(property, {
            shouldmove: { value:props.shouldmove,
                        configurable:true}
        })
        if(props.effect == 'Flies'){
            setTimeout(() => createFlies(), 1000)
        }else if(props.effect == 'ChannelSplit'){
            setTimeout(() => createChannelSplit(), 1000)
        }else if(props.effect == 'Liquid'){
            setTimeout(() => createLiquid(), 1000)
        }else if(props.effect == 'Rolling'){
            setTimeout(() => createRolling(), 1000)
        }else if(props.effect == 'Sliding'){
            setTimeout(() => createSliding(), 1000)
        }
    })*/
    
    
/*
    gui.add(props, 'uOffset', 0,1);
    gui.add(props, 'uRotation', 0,1);
    gui.add(props, 'uApplyBlur', 0,1);
    gui.add(props, 'uAnimateNoise', 0,1);*/
  

// Choose from named values
  //  gui.add(text1, 'speed', { Stopped: 0, Slow: 1, Fast: 1 } ).listen();

  
//---


/* var update = function() {

    requestAnimationFrame(update);
  
    // Iterate over all controllers
    for (var i in gui.__controllers) {
       
      gui.__controllers[i].updateDisplay();
    }
  
  };
  
  update(); */
//--- Überflüssig wegen OnChangen + Performance Probleme
var blotter;
var scope2;
 

  
   var createChannelSplit = function () {
    var materialChannelSplit = new Blotter.ChannelSplitMaterial();
          //channel
          materialChannelSplit.uniforms.uOffset.value = props.uOffset; //5
          materialChannelSplit.uniforms.uRotation.value = props.uRotation; //0.5
          materialChannelSplit.uniforms.uApplyBlur.value = props.uApplyBlur; // 0 false, 1 true
          materialChannelSplit.uniforms.uAnimateNoise.value = props.uAnimateNoise; //3

    text = new Blotter.Text(props.content, property)
    blotter= new Blotter(materialChannelSplit, {
        texts: text
        })

        scope2 = blotter.forText(text);
        scope2.appendTo(container);
       if($(".b-canvas")[0] && $(".b-canvas").length > 1){
            $(".b-canvas")[0].remove();
          //  console.log($(".b-canvas")[0])
            }

            document.onmousemove = moveIt;
            function moveIt(event) {
            
                materialChannelSplit.uniforms.uRotation.value = (event.clientX * .1);
                materialChannelSplit.uniforms.uRotation.value = (event.clientY * .1);

                materialChannelSplit.uniforms.uOffset.value = (event.clientX * .0001);
            
            }


            
 
   } 

  var createFlies = function () {
           
        //flies
        var materialFlies = new Blotter.FliesMaterial();
        materialFlies.uniforms.uPointCellWidth.value = props.uPointCellWidth; //0.01
        materialFlies.uniforms.uPointRadius.value = props.uPointRadius; //.5
        materialFlies.uniforms.uSpeed.value = 5;

    text = new Blotter.Text(props.content, property)
    blotter= new Blotter(materialFlies, {
        texts: text
        })

        scope2 = blotter.forText(text);
        scope2.appendTo(container);
        if($(".b-canvas")[0] && $(".b-canvas").length > 1){
            $(".b-canvas")[0].remove();
          //  console.log($(".b-canvas")[0])
            }
            document.onmousemove = moveIt2;
        function moveIt2(event) {

          //  materialFlies.uniforms.uPointCellWidth.value = 0.02;
         //   materialFlies.uniforms.uPointRadius.value = (event.clientX * 0.001);
            materialFlies.uniforms.uSpeed.value = (event.clientX * 0.02 * -1);

        }
   }

   // Liquid

   var createLiquid = function() {
    var materialLiquid = new Blotter.LiquidDistortMaterial();
    materialLiquid.uniforms.uVolatility.value =props.uVolatility; //0.03
    materialLiquid.uniforms.uSeed.value = 0;
    materialLiquid.uniforms.uSpeed.value = .4; 
    
    
    text = new Blotter.Text(props.content, property)
    var blotter = new Blotter(materialLiquid, {
       texts: text
    })
    
    var scope3 = blotter.forText(text);
    
    scope3.appendTo(container);

    if($(".b-canvas")[0] && $(".b-canvas").length > 1){
        $(".b-canvas")[0].remove();
      //  console.log($(".b-canvas")[0])
        }
    
    document.onmousemove = moveIt3;
    function moveIt3(event) {
    
        //materialLiquid.uniforms.uVolatility.value = (event.clientX * 0.001);
        materialLiquid.uniforms.uSeed.value = (event.clientX * 0.01);
        materialLiquid.uniforms.uSpeed.value = (event.clientX * 0.01);
    
    }
   }

   // Rolling

   var createRolling = function() {
    var materialRolling = new Blotter.RollingDistortMaterial();
    materialRolling.uniforms.uSineDistortSpread.value = 1;
    materialRolling.uniforms.uSineDistortCycleCount.value = 2;
    materialRolling.uniforms.uSineDistortAmplitude.value = .2; 
    materialRolling.uniforms.uNoiseDistortVolatility.value = props.uNoiseDistortVolatility; //.1
    materialRolling.uniforms.uNoiseDistortAmplitude.value = .3; 
    //material4.uniforms.uDistortPosition.value = .3; 
    materialRolling.uniforms.uRotation.value = props.uRotationRoll; //.90
    materialRolling.uniforms.uSpeed.value = .3; 
    
    text = new Blotter.Text(props.content, property)
    var blotter = new Blotter(materialRolling, {
       texts: text
    })
    
    var scope3 = blotter.forText(text);
    
    scope3.appendTo(container);

    if($(".b-canvas")[0] && $(".b-canvas").length > 1){
        $(".b-canvas")[0].remove();
      //  console.log($(".b-canvas")[0])
        }
    
    document.onmousemove = moveIt4;
    function moveIt4(event) {
    
        //materialRolling.uniforms.uSineDistortSpread.value = (event.clientX * 0.005);
       // materialRolling.uniforms.uSineDistortCycleCount.value = (event.clientX * 0.001);
     //   materialRolling.uniforms.uSineDistortAmplitude.value = (event.clientX * 0.002); 
//   materialRolling.uniforms.uNoiseDistortVolatility.value = (event.clientX * 0.07); 
      //  materialRolling.uniforms.uNoiseDistortAmplitude.value = (event.clientX * 0.01); 
       // materialRolling.uniforms.uRotation.value = (event.clientX * 0.1);
        materialRolling.uniforms.uSpeed.value = (event.clientX * 0.001); 
    
    }
   }

   // Sliding
   var createSliding = function() {
    var materialSliding = new Blotter.SlidingDoorMaterial();
    materialSliding.uniforms.uDivisions.value =20;
    materialSliding.uniforms.uDivisionWidth.value = .2;
    materialSliding.uniforms.uAnimateHorizontal.value = props.uAnimateHorizontal; //0
    materialSliding.uniforms.uFlipAnimationDirection.value = props.uFlipAnimationDirection; //1
    materialSliding.uniforms.uSpeed.value = .3;
   text = new Blotter.Text(props.content, property)

    var blotter = new Blotter(materialSliding, {
       texts: text
    })
    
    var scope4 = blotter.forText(text);
    
    scope4.appendTo(container);

    if($(".b-canvas")[0] && $(".b-canvas").length > 1){
        $(".b-canvas")[0].remove();
      //  console.log($(".b-canvas")[0])
        }
    
    document.onmousemove = moveIt5;
    function moveIt5(event) {
        console.log(event.clientX)
      //  materialSliding.uniforms.uDivisions.value = 10;
        //materialSliding.uniforms.uDivisionWidth.value = .1;
       // materialSliding.uniforms.uAnimateHorizontal.value = 0;
        //materialSliding.uniforms.uFlipAnimationDirection.value =0;
        materialSliding.uniforms.uSpeed.value = (event.clientX * 0.0009);
    
    }
   }
  
    
  
});

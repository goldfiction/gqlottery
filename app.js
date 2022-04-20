function randval(max,avoid){
    var val=Math.floor(Math.random() * max)+1
    if(avoid){avoid.forEach((avoidVal) => { if(val==avoidVal){ return randval(max,avoid); } })}
    return val;
}

function manypush(many,max,avoid){
    var value=[],i=0;
    for(;i++<many;) value.push(randval(max,avoid?value:false));
    return value;
}

function runMain(){
    console.log("Welcome to GqLottery")
    console.log("--------------------");
    console.log("");
    
    var seven={},six={};
    
    seven.value=manypush(3,7,false);
    seven.toString=function(){return ""+this.value[0]+" "+this.value[1]+" "+this.value[2]+""};
    console.log("This round of 777 wining number is: "+seven.toString())
    console.log("");
    
    six.value=manypush(7,49,true)
    six.toString=function(){return ""+this.value[0]+" "+this.value[1]+" "+this.value[2]+" "+this.value[3]+" "+this.value[4]+" "+this.value[5]+" plus special:("+this.value[6]+")"};
    console.log("This round of 649 wining number is: "+six.toString())
    console.log("");
    
    console.log("Did you get it? :)")
    console.log("");
}

module.exports.runMain=runMain;
runMain();
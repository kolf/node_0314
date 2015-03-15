/**
 * Created by Kolf on 2015/3/14.
 */
var Event=function(){

};
Event.prototype.addListener=function(type,listener){
    if(typeof listener!=='function'){
        throw TypeError('hhh')
    }
    if(!this._events[type]){
        this._events={}
    }else{

    }
}
import { Injectable } from '@angular/core';

class CurrentVehicleTopic {

    private topic={name:"",id:null}

    set topicInfo(data:any){
        this.topic = {name: data.topic.name,id:data.topic.id}
    }

    get topicInfo(){
        return this.topic;
    }
}

export {CurrentVehicleTopic}
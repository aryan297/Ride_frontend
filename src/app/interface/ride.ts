export enum rideState{
    CREATED='CREATED',
    ASSIGNED='ASSIGNED',
    START='START',
    COMPLETE='COMPLETE'


}

export enum rideType{
    scheduled_ride="SCHEDULED_RIDE",
    rental_ride="RENTAL_RIDE"
}

export interface Ride{
    _id:string
    driverId:string
    driverName:string
    riderName:string
    riderPhone:string
    pickUPAddress:string
    dropAddress:string
    rideType:rideType
    rideState:rideState
    paymentType:string
    amount:number
    scheduledTime:Date
    
}
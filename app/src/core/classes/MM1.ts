import IModel from "../interfaces/IModel";
import Model from "./Model";

class MM1 extends Model implements IModel{
    lq:number
    wq:number
    l:number
    w:number
    ro:number
    p0:number
    s:number

    constructor(lambda:number, miu:number){
        super(lambda, miu)
        this.lq = 0
        this.wq = 0
        this.l = 0
        this.w = 0
        this.ro = 0
        this.p0 = 0
        this.s = 1
    }

    calculateVars():number {
        this.ro = this.lambda / this.miu
        this.l = (this.lambda) / (this.miu - this.lambda)
        this.lq = (this.lambda ** 2) / (this.miu * (this.miu - this.lambda))
        this.wq = this.lq / this.lambda
        this.w = this.l / this.lambda
        this.p0 = 1 - this.ro
        return this.ro, this.l, this.lq, this.wq, this.w, this.p0
    }

    getPn(n:number):number {
        return (this.ro ** n) * this.p0
    }
    
}

export default MM1
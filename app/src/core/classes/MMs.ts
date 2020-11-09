import IModel from "../interfaces/IModel";
import Model from "./Model";
import factorial from "../utils"

class MMs extends Model implements IModel{
    lq:number
    wq:number
    l:number
    w:number
    ro:number
    p0:number
    s:number

    constructor(lambda:number, miu:number, s:number){
        super(lambda, miu)
        this.lq = 0
        this.wq = 0
        this.l = 0
        this.w = 0
        this.ro = 0
        this.p0 = 0
        this.s = s
    }

    calculateVars():number {
        this.ro = this.lambda / (this.s * this.miu)
        this.lq = (this.p0 * ((this.lambda / this.miu) ** this.s) * this.ro) / (factorial(this.s) * ((1 - this.ro) ** 2))
        this.l = this.lq + (this.lambda / this.miu)
        return 0
    }

    getPn(n:number):number {
        if(n >= 0 && n <= this.s) {
            return (((this.lambda / this.miu) ** n) / factorial(n)) * this.p0
        } else if(n > this.s) {
            return (
                    (
                        (this.lambda / this.miu) ** n
                    ) 
                    / (factorial(this.s)) * (this.s ** (n - this.s))
                   )* this.p0
        }
        return -1
    }

}

export default MMs
export class Dicer {    
    RollDice():DiceResult{
        let result = new DiceResult();
        result.Tens = Math.floor(Math.random()*10); //0-9
        result.Ones = Math.floor(Math.random()*10); //0-9
        return result;
    }
}

export class DiceResult{
    Tens:number = 0;
    Ones:number = 0;

    PercentileResult():number{
        if (this.Tens === 0 && this.Ones ===0)
            return 100;
        else
            return Number(this.Tens + "" + this.Ones);
    }

    AreDoubles():boolean{
        return this.Tens === this.Ones;
    }

    Reversed():number{
        if (this.Tens === 0 && this.Ones ===0)
            return 100;
        else
            return Number(this.Ones + "" + this.Tens);
    }

    Sum():number {
        var val1 = this.Tens === 0 ? 10 : this.Tens;
        var val2 = this.Ones === 0 ? 10 : this.Ones;
        return val1 + val2;
    }
}

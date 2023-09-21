export interface ITalent {
    Name: string;
    Description: string;
    ShortDescription: string;
}

export class Talent {
    Name: string;
    Description: string;
    ShortDescription: string;

    constructor();
    constructor(obj: ITalent);
    constructor(obj: ITalent = {} as ITalent) {
        this.Name = obj.Name || "";
        this.Description = obj.Description || "";
        this.ShortDescription = obj.ShortDescription || "";
    }
}

import {Skill} from "./skill";
import {CharacteristicType} from './characteristicType';
import {Class} from "./class";

export class Career {
  Description: string = "";
  Class: Class;
  Level: number = 1;
  private _CareerPath: string = "";
  public get CareerPath(): string {
        return this._CareerPath;
    }
    public set CareerPath(value: string) {
        this._CareerPath = value;
    }

  private _Status: string = "";
  public get Status(): string {
        return this._Status;
    }
    public set Status(value: string) {
        this._Status = value;
    }
  Skills: Skill[] = [];
  private _Characteristics: CharacteristicType[] = [];
  public get Characteristics(): CharacteristicType[] {
        return this._Characteristics;
    }
    public set Characteristics(value: CharacteristicType[]) {
        this._Characteristics = value;
    }
}
export { Class };


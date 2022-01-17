export class Color {
    public hex:string;
    public hexa:string;
    public rgb:string;
    public rgba:string;
    public r:number;
    public g:number;
    public b:number;
    public a:number;

    constructor(color:string){
        this.parseColor(color);
    }

    parseColor(color:string){
        const hexReg = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/;
        const hexaReg = /^#([0-9a-fA-F]{8}|[0-9a-fA-F]{4})$/;
        const rgbReg = /^[rR][gG][Bb]\(([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}[\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)\)$/;
        const rgbaReg = /^[rR][gG][Bb][Aa]\(([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}[\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),[\s]*(0\.\d{1,2}|1|0)\)$/;
        if(hexReg.test(color)){
            this.hex = color;
        }else if(hexaReg.test(color)){
            this.hexa = color;
        }else if(rgbReg.test(color)){
            this.rgb = color;
        }else if(rgbaReg.test(color)){
            this.rgba = color;
        }
    }

    trans16to10(channel:string):number{
        return Number.parseInt(channel,16);
    }

    trans10to16(channel:number):string{
        return (channel).toString(16);
    }
}
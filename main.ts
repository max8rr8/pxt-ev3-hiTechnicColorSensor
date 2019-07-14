namespace sensors {

  class HiTechnicColorSensor extends sensors.internal.IICSensor {
    getColor() {
        this.transaction(1, [66], 1)
        return this.getBytes()[0]
    }
  
    getRGB() {
        this.transaction(1, [67], 3)
        return this.getBytes()
    }
  
    getWhite() {
        this.transaction(1, [70], 1)
        return this.getBytes()[0]
    }
  
    getAll() {
        this.transaction(1, [66], 5)
        return this.getBytes()
    }
  
    _IICId(){
        return 'HiTechncColorPD'
    }
  }

  export const hitechnicColor1 = new HiTechnicColorSensor(1)
  export const hitechnicColor2 = new HiTechnicColorSensor(2)
  export const hitechnicColor3 = new HiTechnicColorSensor(3)
  export const hitechnicColor4 = new HiTechnicColorSensor(4)
}

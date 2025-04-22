import p1 from './toyata.png'
import p2 from './honda.png'
import p3 from './tesla.png'
import p4 from './mustang.png'
import p5 from './bmw.png'
import p6 from './audi.png'
import p7 from './merche.png'
import p8 from './porche.png'
import p9 from './hundai.png'
import p10 from './clever.png'
import p11 from './sabura.png'
import p12 from './nissan.png'
import p13 from './lexus.png'
import p14 from './volsvegan.png'
import p15 from './mazda.png'
import p16 from './kia.png'
import p17 from './jaquar.png'
import p18 from './ferarri.png'
import p19 from './rivin.png'
import p20 from './volvo.png'
import i1 from './toyotaint.png'
import i2 from './hondaint.png'
import i3 from './tesla_i3.png'
import i4 from './ford_i4.png'
import i5 from './bmw_i6.png'
import i6 from './audi.png'
import i7 from './mercheds_i7.png'
import i8 from './poche_i8.png'
import i9 from './hundai_i9.png'
import i10 from './chevr_i10.png'
import i11 from './subru_i11.png'
import i12 from './nissan_i12.png'
import i13 from './lexus_i13.png'
import i14 from './volsvegan_i14.png'
import i15 from './mazda_i15.png'
import i16 from './kia_i16.png'
import i17 from './jaquar_i17.png'
import i18 from './ferari_i18.png'
import i19 from './risvin_i19.png'
import i20 from './volvo_i20.png'

export const cars = [
    { id: 1, carname: "Toyota",image:p1, model: "Camry", torque: 250,intimage:i1, engine: "2.5L I4", top_speed: 135, price: 25000, type: "Sedan", power: 203, SUV: false,model3D:"./audi.glb"},
    { id: 2, carname: "Honda",image:p2, model: "CR-V", torque: 320,intimage:i2, engine: "1.5L Turbo I4", top_speed: 125, price: 32000, type: "SUV", power: 190, SUV: true,model3D:"./mus1.glb" },
    { id: 3, carname: "Tesla",image:p3, model: "Model 3", torque: 450,intimage:i3, engine: "Electric", top_speed: 162, price: 45000, type: "Sedan", power: 346, SUV: false,model3D:"./tesla.glb"},
    { id: 4, carname: "Ford",image:p4, model: "Mustang", torque: 420, intimage:i4,engine: "5.0L V8", top_speed: 155, price: 40000, type: "Coupe", power: 450, SUV: false,model3D: "./mus1.glb"},
    { id: 5, carname: "BMW",image:p5, model: "X5", torque: 460, intimage:i5,engine: "3.0L Turbo I6", top_speed: 149, price: 62000, type: "SUV", power: 335, SUV: true ,model3D:"./bmw.glb"},
    { id: 6, carname: "Audi", image:p6,model: "A4", torque: 370, intimage:i6,engine: "2.0L Turbo I4", top_speed: 140, price: 41000, type: "Sedan", power: 261, SUV: false ,model3D:"./audi.glb"},
    { id: 7, carname: "Tata",image:p7, model: "GLE", torque: 520,intimage:i7, engine: "3.0L Turbo I6", top_speed: 146, price: 58000, type: "SUV", power: 362, SUV: true,model3D:"./tata.glb" },
    { id: 8, carname: "Porsche", image:p8,model: "911", torque: 450,intimage:i8, engine: "3.0L Turbo H6", top_speed: 191, price: 101000, type: "Coupe", power: 379, SUV: false ,model3D:"./porche.glb"},
    { id: 9, carname: "Hyundai", image:p9,model: "Tucson", torque: 260, intimage:i9,engine: "2.5L I4", top_speed: 130, price: 29000, type: "SUV", power: 187, SUV: true ,model3D:"./hundai.glb"},
    { id: 10, carname: "Chevrolet",image:p10, model: "Corvette", torque: 470, intimage:i10,engine: "6.2L V8", top_speed: 184, price: 62000, type: "Coupe", power: 495, SUV: false,model3D:"./nissan.glb" },
    
  ];
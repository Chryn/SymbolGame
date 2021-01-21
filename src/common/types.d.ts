interface IDisplayImage {
  name: HTMLImageElement;
  isIntruder: boolean;
}

interface IimagesPerCharacteristic {
  backgroundPlain: number;
  backgroundBlank: number;
  typeFlower: number;
  typeLeaf: number;
  circled: number;
  notcircled: number;
}

interface ICaracCount {
  backgroundPlain: number;
  backgroundBlank: number;
  typeFlower: number;
  typeLeaf: number;
  circled: number;
  notcircled: number;
}

interface IImage {
  name: HTMLImageElement;
  caracteristic: {
    backgroundPlain: boolean;
    backgroundBlank: boolean;
    typeFlower: boolean;
    typeLeaf: boolean;
    circled: boolean;
    notcircled: boolean;
  };
}

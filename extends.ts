class Base2 {
    name: string;
    constructor() {
        this.name = "Base";
    }
    doSomething(): void {
        console.log( this.name + " class");
    }
}


class DerivedBase2 extends Base2 {
    constructor() {
        super();
        this.name = "DerivedBase";
    }
}

let base2 = new Base2();
base2.doSomething();

base2 = new DerivedBase2();
base2.doSomething();
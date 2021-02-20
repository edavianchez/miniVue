class miniVueReactive {
    constructor(options){
        this.origen = options.data();
    }
    mount(){
        document.querySelectorAll("*[p-text]").forEach(el => {
            this.pText(el, this.origen, el.getAttribute("p-text"))
        });
    }
    pText(el, target, name) {
        el.innerText = target[name];
    }
    pModel() {}
}

var miniVue = {
    createApp(options) {
        return new miniVueReactive(options);
    }
};
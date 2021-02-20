class miniVueReactive {
    constructor(options){
        // Origen
        this.origen = options.data();
        // Destino
        this.$data = new Proxy(this.origen, {
            get(target, name) {
                if(name in target) {
                    return target[name];
                }
                console.warn("la propiedad", name, "no existe.");
                return "";
            }
        });
    }
    mount(){
        document.querySelectorAll("*[p-text]").forEach(el => {
            this.pText(el, this.$data, el.getAttribute("p-text"))
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
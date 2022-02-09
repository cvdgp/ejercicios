class veiculo{
    constructor(marca, modelo, cv){

        this.marca      = marca;
        this.modelo     = modelo;
        this.cv         = cv;
        this.precio     = null;

    };
    /*los metodos getter actuan como propiedades*/
    get getVeiculo(){
        return ` texto del setter
         Mi coche tiene la marca ${this.marca} el modelo es ${this.modelo} y posee una potencia de ${this.cv} cv
        `;
    };
    /*los métodos setter actuan como funciones que modifican una propiedad y se asignan asi coche.setPrecio= 1500 */

    set setPrecio(precio){
        this.precio = precio * 1.21;

    }
};



const coche = new veiculo("Renaul", "Grand Scenic", 130);

console.log(coche.getVeiculo);
coche.setPrecio= 1500 ;
console.log(coche.precio);

console.time("Tiempe ejecucion bucle CON FOR");
let contador= Array(1000000);
for(let i = 0; i< contador.length ; i++){
    contador[i] = i;
}
console.log(contador);

console.timeEnd("Tiempe ejecucion bucle CON FOR");


console.time("Tiempe ejecucion bucle WITH");
let contador2=0;
iterador = Array(1000000)
with(contador2 < contador2.length){
    iterador[contador2] = contador2;
    contador2++;


}
console.log(iterador);
console.timeEnd("Tiempe ejecucion bucle WITH");


console.time("Tiempe ejecucion bucle FOR EACH");
contador3 = Array(1000000);
contador3.forEach(element => {
    element = 1;
});
console.log(contador3);

console.timeEnd("Tiempe ejecucion bucle FOR EACH");

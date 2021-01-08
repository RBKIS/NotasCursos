const app = Vue.createApp({
    data() {
        return {
            titulo: 'Este es un hola mundo vue!',
            cantidad: 1000,
            enlace: 'https://youtube.com/bluuweb',
            estado: false,
            servicios: ['transferencia', 'pago', 'giro', 'cheques'],
            desactivar: false
        }
    },
    methods: {
        agregarSaldo() {
            this.cantidad = this.cantidad + 100
        },
        disminuirSaldo(valor) {
            if (this.cantidad === 0) {
                this.desactivar = true
                alert('saldo en cero!')
                return
            }
            this.cantidad = this.cantidad - valor
        }
    }
})
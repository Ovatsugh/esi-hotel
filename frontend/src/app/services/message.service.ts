import { Injectable } from "@angular/core";
import Swal from "sweetalert2";
import { ToastrService } from 'ngx-toastr';


@Injectable({
    providedIn: "root"
})
export class MessageService {
    swal = Swal
    constructor(private toastr: ToastrService) { }


    alertError() {
        this.swal.fire({
            html: "Houve uma falha",
            confirmButtonText: "Ok",
            icon: "error"
        })

    }

    alertSucess() {
        this.swal.fire({
            html: "Feito com Sucesso",
            confirmButtonText: "Ok",
            icon: "success"
        })

    }

    toastSucess(msg = "Feito com sucesso") {
        this.toastr.success(msg)
    }

    toastError(msg =  "Houve uma Falha") {
        this.toastr.error(msg)
    }

    loading(type = false) {
        const load = document.getElementById("loading")
        if (type == true) {
            load.style.display = "flex"

        }
        else {
            load.style.display = "none"

        }

    }

}

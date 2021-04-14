(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lucas/Desktop/BarcelonaActiva/ANGULAR/lista-angular/src/main.ts */"zUnb");


/***/ }),

/***/ "7+Fz":
/*!****************************************************!*\
  !*** ./src/app/pages/listado/listado.component.ts ***!
  \****************************************************/
/*! exports provided: ListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoComponent", function() { return ListadoComponent; });
/* harmony import */ var dni_js_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dni-js-validator */ "TZvk");
/* harmony import */ var dni_js_validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dni_js_validator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! email-validator */ "H/qo");
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(email_validator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_listado_rol_listado_rol_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/listado-rol/listado-rol.component */ "zUK8");
/* harmony import */ var _components_jornadas_jornadas_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/jornadas/jornadas.component */ "IaD1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");















function ListadoComponent_mat_hint_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "El formato debe ser entre 1 y 100 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ListadoComponent_mat_hint_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "EL formato debe ser de 9 digitos");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ListadoComponent_mat_icon_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ListadoComponent_mat_hint_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "EL formato debe ser DNI o NIE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ListadoComponent_mat_hint_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "EL formato debe contener @");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ListadoComponent {
    constructor(router, db, snackbar) {
        this.router = router;
        this.db = db;
        this.snackbar = snackbar;
        this.alumnosArray = [];
        this.nombreWrong = null;
        this.alumnosRef = this.db.collection('alumnos');
        // toma el id y los datos del elmento
        const alumnos = this.db.collection('alumnos').snapshotChanges();
        alumnos.subscribe((res) => {
            console.log('LINEA 26');
            //  en un nuevo array nos da el id y los datos y se lo asignamos a alumnos Array
            const arrayMapped = res.map((a) => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { data, id };
            });
            this.alumnosArray = arrayMapped;
            console.log('ARRAY MAPPED', arrayMapped);
        });
    }
    ngOnInit() { }
    crearAlumno(nombre, tel, dni, email) {
        //  añadimos alumnos a la base de datos y le creamos el ID
        if (this.comprobacion()) {
            this.db
                .collection('alumnos')
                .doc(dni)
                .set({
                nombre: nombre,
                tel: tel,
                dni: dni,
                email: email,
                rol: this.rol,
                date: new Date(),
                jornada: parseInt(this.jornada),
            })
                .then(() => {
                // respuesta exitosa
                this.snackbar.open('Formulario Correcto', 'OK', {
                    panelClass: ['successSnackbar'],
                });
                // redireccionamos a una pagina de bienvenida
                this.router.navigateByUrl('bienvenida');
            })
                .catch((e) => {
                // nos da error
                console.error('Error', e);
            });
        }
        else {
            console.log('aquie aparecera el error');
            this.nombreWrong == null ? (this.nombreWrong = 'error') : null;
            this.mailWrong == null ? (this.mailWrong = 'error') : null;
            this.telWrong == null ? (this.telWrong = 'error') : null;
            this.dniWrong == null ? (this.dniWrong = 'error') : null;
            // aqui sale el SNACKBAR, el estilo esta en STYLES.CSS
            this.snackbar.open('El formulario esta mal', 'Vale', {
                duration: 2000,
                panelClass: ['errorSnackBar'],
            });
        }
    }
    // tomamos el evento del hijo y lo asignamos en este componente
    rolDefinido(rolParametro) {
        this.rol = rolParametro;
    }
    comprobacion() {
        const nombre = this.nombreWrong === 'success';
        const phone = this.telWrong === 'success';
        const mail = this.mailWrong === 'success';
        const dni = this.dniWrong === 'success';
        if (nombre && phone && mail && dni) {
            return true;
        }
        else {
            return false;
        }
    }
    jornadasDefinidas(ev) {
        this.jornada = ev;
    }
    salir() {
        this.router.navigateByUrl('login');
    }
    comprobarNombre(nombre) {
        if (nombre.length > 100 || nombre.length < 1) {
            this.nombreWrong = 'error';
        }
        else {
            this.nombreWrong = 'success';
        }
    }
    comprobarTel(tel) {
        // if (tel.length == 9) {
        //   this.telWrong = 'success';
        // } else {
        //   this.telWrong = 'error';
        // }
        tel.length == 9 ? (this.telWrong = 'success') : (this.telWrong = 'error');
    }
    comprobarDni(dnie) {
        // es lo mismo asi que con el if pero con sola una instruccion
        // (dni.isValid(dnie) ? this.dniWrong = 'success' : this.dniWrong = 'error')
        if (dni_js_validator__WEBPACK_IMPORTED_MODULE_0__["isValid"](dnie)) {
            this.dniWrong = 'success';
        }
        else {
            this.dniWrong = 'error';
        }
    }
    comprobarMail(mail) {
        if (email_validator__WEBPACK_IMPORTED_MODULE_1__["validate"](mail)) {
            this.mailWrong = 'success';
        }
        else {
            this.mailWrong = 'error';
        }
    }
}
ListadoComponent.ɵfac = function ListadoComponent_Factory(t) { return new (t || ListadoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"])); };
ListadoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ListadoComponent, selectors: [["app-listado"]], decls: 48, vars: 17, consts: [[1, "centrar"], ["appearance", "outline"], ["matInput", "", "placeholder", "Placeholder", "type", "text", 3, "ngModel", "ngModelChange"], ["nombre", ""], ["matSuffix", ""], ["class", "error", 4, "ngIf"], ["matInput", "", "placeholder", "Placeholder", "type", "text", "onkeypress", "return (event.charCode >= 48 && event.charCode <= 57)", "min", "1", "maxlength", "9", 3, "ngModel", "ngModelChange"], ["tel", ""], ["matPrefix", "", "class", "success", 4, "ngIf"], ["matInput", "", "placeholder", "Placeholder", "type", "text", "min", "1", "maxlength", "9", 3, "ngModel", "ngModelChange"], ["dni", ""], ["matInput", "", "placeholder", "Placeholder", "type", "email", 3, "ngModel", "ngModelChange"], ["email", ""], [1, "agregar"], [3, "rol"], [3, "jornada"], ["mat-stroked-button", "", 3, "click"], [1, "salir"], [1, "error"], ["matPrefix", "", 1, "success"]], template: function ListadoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ListadoComponent_Template_input_ngModelChange_6_listener($event) { return ctx.comprobarNombre($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ListadoComponent_mat_hint_10_Template, 2, 0, "mat-hint", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Telefono");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ListadoComponent_Template_input_ngModelChange_15_listener($event) { return ctx.comprobarTel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ListadoComponent_mat_hint_19_Template, 2, 0, "mat-hint", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "DNI o NIE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, ListadoComponent_mat_icon_24_Template, 2, 0, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ListadoComponent_Template_input_ngModelChange_25_listener($event) { return ctx.comprobarDni($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "assignment_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, ListadoComponent_mat_hint_29_Template, 2, 0, "mat-hint", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ListadoComponent_Template_input_ngModelChange_34_listener($event) { return ctx.comprobarMail($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "local_post_office");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, ListadoComponent_mat_hint_38_Template, 2, 0, "mat-hint", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "app-listado-rol", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("rol", function ListadoComponent_Template_app_listado_rol_rol_40_listener($event) { return ctx.rolDefinido($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "app-jornadas", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("jornada", function ListadoComponent_Template_app_jornadas_jornada_42_listener($event) { return ctx.jornadasDefinidas($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListadoComponent_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](16); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](26); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](35); return ctx.crearAlumno(_r0.value, _r2.value, _r5.value, _r7.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " CREAR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListadoComponent_Template_button_click_46_listener() { return ctx.salir(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Salir");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](16);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](26);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", _r0.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.nombreWrong);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nombreWrong === "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", _r2.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.telWrong);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.telWrong === "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.dniWrong === "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", _r5.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.dniWrong);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.dniWrong === "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", _r7.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.mailWrong);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mailWrong === "error");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MaxLengthValidator"], _components_listado_rol_listado_rol_component__WEBPACK_IMPORTED_MODULE_12__["ListadoRolComponent"], _components_jornadas_jornadas_component__WEBPACK_IMPORTED_MODULE_13__["JornadasComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatPrefix"]], styles: [".centrar[_ngcontent-%COMP%] {\n  margin: 5% auto;\n  width: 50%;\n  display: flex;\n  justify-content: center;\n  background-color: rgb(112, 114, 114);\n}\n.success[_ngcontent-%COMP%] {\n  color: green;\n}\n.error[_ngcontent-%COMP%] {\n  color: red;\n}\n.salir[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=\"number\"][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBQ0EscUNBQXFDO0FBQ3JDOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7QUFFQSxZQUFZO0FBQ1o7RUFDRSwwQkFBMEI7QUFDNUIiLCJmaWxlIjoibGlzdGFkby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRyYXIge1xuICBtYXJnaW46IDUlIGF1dG87XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEyLCAxMTQsIDExNCk7XG59XG4uc3VjY2VzcyB7XG4gIGNvbG9yOiBncmVlbjtcbn1cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG59XG4uc2FsaXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi8qIHNhY2FyIHNpbWJvbG8gZGUgbnVtYmVyIGVuIGlucHV0ICovXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbi8qIEZpcmVmb3ggKi9cbmlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "7dW6":
/*!*************************************************************************!*\
  !*** ./src/app/components/listado-alumnos/listado-alumnos.component.ts ***!
  \*************************************************************************/
/*! exports provided: ListadoAlumnosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoAlumnosComponent", function() { return ListadoAlumnosComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _pipes_iconoRol_icono_rol_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/iconoRol/icono-rol.pipe */ "PRBX");







function ListadoAlumnosComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListadoAlumnosComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r12.data.nombre);
} }
function ListadoAlumnosComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Rol");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListadoAlumnosComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "iconoRol");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, element_r13.data.rol), " ");
} }
function ListadoAlumnosComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Tel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListadoAlumnosComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r14.data.tel);
} }
function ListadoAlumnosComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "DNI");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListadoAlumnosComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r15.data.dni);
} }
function ListadoAlumnosComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Eliminar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListadoAlumnosComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListadoAlumnosComponent_td_15_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const element_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.eliminar(element_r16.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListadoAlumnosComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 22);
} }
function ListadoAlumnosComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 23);
} }
class ListadoAlumnosComponent {
    constructor(db) {
        this.db = db;
        this.alumnosArray = [];
        this.alumnosArrayFiltrado = [];
        this.displayedColumns = ['nombre', 'rol', 'tel', 'dni', 'eliminar'];
        this.alumnosRef = this.db.collection('alumnos');
        this.sortedData = this.alumnosArray.slice();
    }
    ngOnInit() {
        const alumnos = this.db.collection('alumnos').snapshotChanges();
        alumnos.subscribe((res) => {
            //  en un nuevo array nos da el id y los datos y se lo asignamos a alumnos Array
            const arrayMapped = res.map((a) => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { data, id };
            });
            this.alumnosArray = arrayMapped;
            this.alumnosArrayFiltrado = this.alumnosArray;
            this.filtrar();
            console.log('ARRAY MAPPED', arrayMapped);
        });
    }
    ngOnChanges(changes) {
        this.filtrar();
    }
    filtrar() {
        const jornadaParseada = parseInt(this.jornada);
        this.alumnosArrayFiltrado = this.alumnosArray.filter((alumnos) => {
            if (alumnos.data.jornada == jornadaParseada) {
                return true;
            }
            else {
                return false;
            }
        });
        console.log(this.alumnosArrayFiltrado);
        this.dataSource = this.alumnosArrayFiltrado;
    }
    eliminar(id) {
        console.log('Nombre', id);
        // this.alumnosRef.doc(id).delete();
        // es un servicio de afuera que muestra mensaje de alerta
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
            title: 'Estas seguro que quieres eliminar?',
            text: id,
            showCancelButton: true,
            confirmButtonText: 'Si!',
            cancelButtonText: 'No',
        }).then((result) => {
            if (result.value) {
                // lo quiero eliminar
                this.alumnosRef.doc(id).delete();
            }
        });
    }
    // funcion de ordenar los campos
    sortData(sort) {
        const data = this.alumnosArrayFiltrado.slice();
        if (!sort.active || sort.direction === '') {
            this.dataSource = data;
            return;
        }
        this.dataSource = data.sort((a, b) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'nombre':
                    return compare((_a = a === null || a === void 0 ? void 0 : a.data) === null || _a === void 0 ? void 0 : _a.nombre, (_b = b === null || b === void 0 ? void 0 : b.data) === null || _b === void 0 ? void 0 : _b.nombre, isAsc);
                case 'rol':
                    return compare((_c = a === null || a === void 0 ? void 0 : a.data) === null || _c === void 0 ? void 0 : _c.rol, (_d = b === null || b === void 0 ? void 0 : b.data) === null || _d === void 0 ? void 0 : _d.rol, isAsc);
                case 'dni':
                    return compare((_e = a === null || a === void 0 ? void 0 : a.data) === null || _e === void 0 ? void 0 : _e.dni, (_f = b === null || b === void 0 ? void 0 : b.data) === null || _f === void 0 ? void 0 : _f.dni, isAsc);
                case 'tel':
                    return compare((_g = a === null || a === void 0 ? void 0 : a.data) === null || _g === void 0 ? void 0 : _g.tel, (_h = b === null || b === void 0 ? void 0 : b.data) === null || _h === void 0 ? void 0 : _h.tel, isAsc);
                default:
                    return 0;
            }
        });
    }
}
ListadoAlumnosComponent.ɵfac = function ListadoAlumnosComponent_Factory(t) { return new (t || ListadoAlumnosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
ListadoAlumnosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListadoAlumnosComponent, selectors: [["app-listado-alumnos"]], inputs: { jornada: "jornada" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 18, vars: 3, consts: [["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["matColumnDef", "nombre"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "rol"], ["mat-header-cell", "", "mat-sort-header", "rol", 4, "matHeaderCellDef"], ["matColumnDef", "tel"], ["mat-header-cell", "", "mat-sort-header", "tel", 4, "matHeaderCellDef"], ["matColumnDef", "dni"], ["mat-header-cell", "", "mat-sort-header", "dni", 4, "matHeaderCellDef"], ["matColumnDef", "eliminar"], ["mat-header-cell", "", "mat-sort-header", "eliminar", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "rol"], [1, "material-icons"], ["mat-header-cell", "", "mat-sort-header", "tel"], ["mat-header-cell", "", "mat-sort-header", "dni"], ["mat-header-cell", "", "mat-sort-header", "eliminar"], [1, "material-icons", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ListadoAlumnosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("matSortChange", function ListadoAlumnosComponent_Template_table_matSortChange_0_listener($event) { return ctx.sortData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ListadoAlumnosComponent_th_2_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ListadoAlumnosComponent_td_3_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ListadoAlumnosComponent_th_5_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ListadoAlumnosComponent_td_6_Template, 4, 3, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ListadoAlumnosComponent_th_8_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ListadoAlumnosComponent_td_9_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](10, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ListadoAlumnosComponent_th_11_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ListadoAlumnosComponent_td_12_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](13, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ListadoAlumnosComponent_th_14_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ListadoAlumnosComponent_td_15_Template, 3, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ListadoAlumnosComponent_tr_16_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ListadoAlumnosComponent_tr_17_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], pipes: [_pipes_iconoRol_icono_rol_pipe__WEBPACK_IMPORTED_MODULE_6__["IconoRolPipe"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 50vw;\n}\nspan[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhZG8tYWx1bW5vcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF1Rkk7QUFDSjtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6Imxpc3RhZG8tYWx1bW5vcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogbWFpbiB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuICAuY2FtcG9zIHtcbiAgICBtYXJnaW46IDAgYXV0byAzMHB4IGF1dG87XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbHVtbnM6IGF1dG8gMTtcbiAgICBjb2x1bW4tZmlsbDogYmFsYW5jZTtcbiAgICBjb2x1bW4tZ2FwOiA0JTtcbiAgXG4gIH1cbiAgLmFncmVnYXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICB9XG4gIC5hZ3JlZ2FyQWwge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG4gIC5pbnAge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAuYWx1bW5vcyB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGNvbHVtbnM6IGF1dG8gMTtcbiAgICBjb2x1bW4tZ2FwOiAzJTtcbiAgICBjb2x1bW4tcnVsZTogMnB4IHNvbGlkIGdyZXk7XG4gICAgY29sdW1uLWZpbGw6IGJhbGFuY2U7XG4gIH1cbiAgLmFsdW1ubyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBraGFraTtcbiAgfVxuICAubm9tYnJlIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbiAgaDIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAubWF0ZXJpYWwtaWNvbnMge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLnNhbGlyIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICBcbiAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAuYWx1bW5vcyB7XG4gICAgICBjb2x1bW5zOiBhdXRvIDI7XG4gICAgfVxuICAgIC5jYW1wb3N7XG4gICAgICBjb2x1bW5zOiBhdXRvIDI7XG4gICAgfVxuICB9XG4gIFxuICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xuICAgIC5hbHVtbm9zIHtcbiAgICAgIFxuICAgICAgY29sdW1uczogYXV0byA0O1xuICAgICAgY29sdW1uLWdhcDogNHZ3O1xuICAgICAgcGFkZGluZzogNHZ3O1xuICAgIH1cbiAgICAuY2FtcG9ze1xuICAgICAgY29sdW1uczogYXV0byAzO1xuICAgICAgY29sdW1uLWdhcDogM3Z3O1xuICAgICAgcGFkZGluZzogM3Z3O1xuICAgIH1cbiAgfVxuICAgKi9cbnRhYmxlIHtcbiAgd2lkdGg6IDUwdnc7XG59XG5zcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4iXX0= */"] });
function compare(a, b, isAsc) {
    {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CBpB":
/*!**********************************************************!*\
  !*** ./src/app/pages/bienvenida/bienvenida.component.ts ***!
  \**********************************************************/
/*! exports provided: BienvenidaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BienvenidaComponent", function() { return BienvenidaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class BienvenidaComponent {
    constructor() { }
    ngOnInit() {
    }
}
BienvenidaComponent.ɵfac = function BienvenidaComponent_Factory(t) { return new (t || BienvenidaComponent)(); };
BienvenidaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BienvenidaComponent, selectors: [["app-bienvenida"]], decls: 7, vars: 0, consts: [["mat-stroked-button", "", "routerLink", "/listado"]], template: function BienvenidaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "DISFRUTE DEL PARTIDO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Crear otro participante ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaWVudmVuaWRhLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _servicios_logueado_logueado_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../servicios/logueado/logueado.service */ "jw5g");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");












function LoginComponent_mat_icon_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_icon_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(router, snackBar, logueado, fb) {
        this.router = router;
        this.snackBar = snackBar;
        this.logueado = logueado;
        this.fb = fb;
        // email: string;
        // password: string;
        this.hide = true;
        this.pipeVar = 'HOLA';
    }
    // aqui declaramos, y ponemos las validaciones
    ngOnInit() {
        const email = [
            { value: '', disabled: false },
            [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        ];
        const password = [
            { value: '', disabled: false },
            [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(6)],
        ];
        const config = { email, password };
        this.formData = this.fb.group(config);
    }
    // enlazamos devuelve una variable que se puede consultar
    get email() {
        return this.formData.get('email');
    }
    get password() {
        return this.formData.get('password');
    }
    login() {
        // comprobar si coincide el mail y el pass
        if (this.formData.get('email').value === 'sl.lucasmoreno@gmail.com' &&
            this.formData.get('password').value === '123') {
            // lleva a pagina admin
            this.router.navigateByUrl('admin');
            // creamos servicio para guardar si estamos logeados
            this.logueado.setEstado(true);
        }
        else {
            this.snackBar.open('El mail o pass son Incorrectos', 'OK', {
                panelClass: ['errorSnackBar'],
            });
            this.logueado.setEstado(false);
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_servicios_logueado_logueado_service__WEBPACK_IMPORTED_MODULE_4__["LogueadoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 22, vars: 10, consts: [["layout", "row", "layout-align", "center center", 1, "example-card"], [3, "formGroup"], [1, "container"], [2, "text-align", "center", "margin-bottom", "20px"], ["appearance", "outline", 1, "email"], ["matInput", "", "type", "text", "placeholder", "Intro email", 3, "formControlName"], ["matPrefix", "", "class", "error", 4, "ngIf"], ["appearance", "outline"], ["matInput", "", 3, "formControlName", "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["matPrefix", "", 1, "error"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LoginComponent_mat_icon_11_Template, 2, 0, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LoginComponent_mat_icon_16_Template, 2, 0, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_17_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_20_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " LOG IN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.email == null ? null : ctx.email.invalid) && (ctx.email == null ? null : ctx.email.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", "password")("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.password == null ? null : ctx.password.invalid) && (ctx.password == null ? null : ctx.password.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.formData == null ? null : ctx.formData.invalid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatPrefix"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 20px;\n  padding: 20px 0 20px 0;\n}\n.email[_ngcontent-%COMP%] {\n  width: 236px;\n}\n.example-card[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 25%;\n  top: 10%;\n}\n.error[_ngcontent-%COMP%] {\n  color: red;\n}\n@media (max-width: 900px) {\n  .example-card[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLFFBQVE7QUFDVjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHggMCAyMHB4IDA7XG59XG4uZW1haWwge1xuICB3aWR0aDogMjM2cHg7XG59XG4uZXhhbXBsZS1jYXJkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAyNSU7XG4gIHRvcDogMTAlO1xufVxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5leGFtcGxlLWNhcmQge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "EI2K":
/*!*******************************************************!*\
  !*** ./src/app/guard/isLogueado/is-logueado.guard.ts ***!
  \*******************************************************/
/*! exports provided: IsLogueadoGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsLogueadoGuard", function() { return IsLogueadoGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _servicios_logueado_logueado_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicios/logueado/logueado.service */ "jw5g");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class IsLogueadoGuard {
    // importamos el servicio logueadoService
    constructor(logueado, route) {
        this.logueado = logueado;
        this.route = route;
    }
    canActivate(route, state) {
        // obetenemos el estado del logueado y si es false va al login
        // if (this.logueado.getEstado()) {
        //   return true;
        // } else {
        //   this.route.navigateByUrl('/login');
        //   return false;
        // }
        //  volver a poner lo de arriba
        return this.logueado.getEstado();
    }
}
IsLogueadoGuard.ɵfac = function IsLogueadoGuard_Factory(t) { return new (t || IsLogueadoGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_servicios_logueado_logueado_service__WEBPACK_IMPORTED_MODULE_1__["LogueadoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
IsLogueadoGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IsLogueadoGuard, factory: IsLogueadoGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "IaD1":
/*!***********************************************************!*\
  !*** ./src/app/components/jornadas/jornadas.component.ts ***!
  \***********************************************************/
/*! exports provided: JornadasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JornadasComponent", function() { return JornadasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");








function JornadasComponent_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jor_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", jor_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](jor_r1);
} }
class JornadasComponent {
    constructor(db) {
        this.db = db;
        this.jornadasArray = [];
        this.jornada = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.jornadasRef = this.db
            .collection('jornadas')
            .valueChanges()
            .subscribe((res) => {
            console.log(res);
            this.cuantasJornadasHay = res.find((ele) => {
                console.log(ele['jornadas']);
                return ele['jornadas'];
            });
            this.crearArrayDeJornadas(this.cuantasJornadasHay.jornadas);
            this.jornadaActual = res.find((ele) => {
                console.log(ele['jornada']);
                return ele['jornada'];
            });
            this.selectedItem = this.jornadaActual.jornada;
            this.jornada.emit(this.selectedItem);
        });
    }
    onChange(ev) {
        this.jornada.emit(ev);
    }
    ngOnDestroy() {
        if (this.subscripcionAjornadas) {
            this.subscripcionAjornadas.unsubscribe();
        }
    }
    crearArrayDeJornadas(jornadas) {
        this.jornadasArray = [];
        for (let index = 0; index < jornadas; index++) {
            // agrega las jornadas que hay dentro de la matriz
            this.jornadasArray.push(index + 1);
        }
    }
}
JornadasComponent.ɵfac = function JornadasComponent_Factory(t) { return new (t || JornadasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
JornadasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JornadasComponent, selectors: [["app-jornadas"]], outputs: { jornada: "jornada" }, decls: 6, vars: 2, consts: [["appearance", "outline"], ["name", "", "id", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function JornadasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Jornada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function JornadasComponent_Template_mat_select_ngModelChange_4_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, JornadasComponent_mat_option_5_Template, 2, 2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jornadasArray);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb3JuYWRhcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "PRBX":
/*!**************************************************!*\
  !*** ./src/app/pipes/iconoRol/icono-rol.pipe.ts ***!
  \**************************************************/
/*! exports provided: IconoRolPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconoRolPipe", function() { return IconoRolPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class IconoRolPipe {
    transform(value, ...args) {
        if (value === 'Jugador') {
            return 'sports-basketball';
        }
        else if (value === 'entrenador') {
            return 'engineering';
        }
        else if (value === 'arbitro') {
            return 'sports';
        }
        else {
            return 'people-alt';
        }
    }
}
IconoRolPipe.ɵfac = function IconoRolPipe_Factory(t) { return new (t || IconoRolPipe)(); };
IconoRolPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "iconoRol", type: IconoRolPipe, pure: true });


/***/ }),

/***/ "PUDd":
/*!***********************************************************!*\
  !*** ./src/app/directives/aumentar/aumentar.directive.ts ***!
  \***********************************************************/
/*! exports provided: AumentarDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AumentarDirective", function() { return AumentarDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AumentarDirective {
    constructor() { }
}
AumentarDirective.ɵfac = function AumentarDirective_Factory(t) { return new (t || AumentarDirective)(); };
AumentarDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AumentarDirective, selectors: [["", "appAumentar", ""]] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    // para poder leer base de datos de firebase, siempre constructor
    constructor(db, router) {
        this.db = db;
        this.router = router;
        this.title = 'lista-angular';
        const prueba = this.db.collection('alumnos').valueChanges();
        prueba.subscribe(console.log);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_listado_listado_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/listado/listado.component */ "7+Fz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _components_listado_rol_listado_rol_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/listado-rol/listado-rol.component */ "zUK8");
/* harmony import */ var _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/admin/admin.component */ "sS4B");
/* harmony import */ var _components_listado_alumnos_listado_alumnos_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/listado-alumnos/listado-alumnos.component */ "7dW6");
/* harmony import */ var _components_jornadas_jornadas_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/jornadas/jornadas.component */ "IaD1");
/* harmony import */ var _pages_bienvenida_bienvenida_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/bienvenida/bienvenida.component */ "CBpB");
/* harmony import */ var _pipes_pipeMinusculas_pipe_minusculas_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pipes/pipeMinusculas/pipe-minusculas.pipe */ "ix3a");
/* harmony import */ var _directives_aumentar_aumentar_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./directives/aumentar/aumentar.directive */ "PUDd");
/* harmony import */ var _pipes_iconoRol_icono_rol_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pipes/iconoRol/icono-rol.pipe */ "PRBX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/core */ "fXoL");































const config = {
    apiKey: 'AIzaSyCyFEMjmxH00nYZWQ4MMqzDNPK5n3EBPhc',
    authDomain: 'lista-curso-f7744.firebaseapp.com',
    projectId: 'lista-curso-f7744',
    storageBucket: 'lista-curso-f7744.appspot.com',
    messagingSenderId: '278678780821',
    appId: '1:278678780821:web:51b8dff9afbb2dece5549c',
    measurementId: 'G-2BRTHMD3Z4',
};
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(config),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorageModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__["MatSortModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        _pages_listado_listado_component__WEBPACK_IMPORTED_MODULE_8__["ListadoComponent"],
        _components_listado_rol_listado_rol_component__WEBPACK_IMPORTED_MODULE_21__["ListadoRolComponent"],
        _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_22__["AdminComponent"],
        _components_listado_alumnos_listado_alumnos_component__WEBPACK_IMPORTED_MODULE_23__["ListadoAlumnosComponent"],
        _components_jornadas_jornadas_component__WEBPACK_IMPORTED_MODULE_24__["JornadasComponent"],
        _pages_bienvenida_bienvenida_component__WEBPACK_IMPORTED_MODULE_25__["BienvenidaComponent"],
        _pipes_pipeMinusculas_pipe_minusculas_pipe__WEBPACK_IMPORTED_MODULE_26__["PipeMinusculasPipe"],
        _directives_aumentar_aumentar_directive__WEBPACK_IMPORTED_MODULE_27__["AumentarDirective"],
        _pipes_iconoRol_icono_rol_pipe__WEBPACK_IMPORTED_MODULE_28__["IconoRolPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorageModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__["MatSortModule"]] }); })();


/***/ }),

/***/ "ix3a":
/*!**************************************************************!*\
  !*** ./src/app/pipes/pipeMinusculas/pipe-minusculas.pipe.ts ***!
  \**************************************************************/
/*! exports provided: PipeMinusculasPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeMinusculasPipe", function() { return PipeMinusculasPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PipeMinusculasPipe {
    transform(value, ...args) {
        const parametro = args[0];
        return value.toLowerCase().substring(parametro);
    }
}
PipeMinusculasPipe.ɵfac = function PipeMinusculasPipe_Factory(t) { return new (t || PipeMinusculasPipe)(); };
PipeMinusculasPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "pipeMinusculas", type: PipeMinusculasPipe, pure: true });


/***/ }),

/***/ "jw5g":
/*!********************************************************!*\
  !*** ./src/app/servicios/logueado/logueado.service.ts ***!
  \********************************************************/
/*! exports provided: LogueadoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogueadoService", function() { return LogueadoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LogueadoService {
    constructor() {
        this.estoyLogueado = false;
    }
    getEstado() {
        // devolemos el dato estoyLoguedo
        return this.estoyLogueado;
    }
    setEstado(estado) {
        // asiganamos el estado de la variable
        this.estoyLogueado = estado;
    }
}
LogueadoService.ɵfac = function LogueadoService_Factory(t) { return new (t || LogueadoService)(); };
LogueadoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LogueadoService, factory: LogueadoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "sS4B":
/*!************************************************!*\
  !*** ./src/app/pages/admin/admin.component.ts ***!
  \************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _components_jornadas_jornadas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/jornadas/jornadas.component */ "IaD1");
/* harmony import */ var _components_listado_alumnos_listado_alumnos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/listado-alumnos/listado-alumnos.component */ "7dW6");
/* harmony import */ var _directives_aumentar_aumentar_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/aumentar/aumentar.directive */ "PUDd");






class AdminComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    // asignamos la información del hijo al padre
    filtrarPorJornada(ev) {
        console.log(ev);
        this.jornadaAFiltrar = ev;
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 8, vars: 1, consts: [[1, "text-center"], [1, "card"], [3, "jornada"], ["appAumentar", "", 3, "jornada"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Jornada a filtrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-jornadas", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("jornada", function AdminComponent_Template_app_jornadas_jornada_4_listener($event) { return ctx.filtrarPorJornada($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lista de alumnos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-listado-alumnos", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("jornada", ctx.jornadaAFiltrar);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _components_jornadas_jornadas_component__WEBPACK_IMPORTED_MODULE_3__["JornadasComponent"], _components_listado_alumnos_listado_alumnos_component__WEBPACK_IMPORTED_MODULE_4__["ListadoAlumnosComponent"], _directives_aumentar_aumentar_directive__WEBPACK_IMPORTED_MODULE_5__["AumentarDirective"]], styles: ["body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckIiLCJmaWxlIjoiYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_listado_listado_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/listado/listado.component */ "7+Fz");
/* harmony import */ var _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/admin/admin.component */ "sS4B");
/* harmony import */ var _pages_bienvenida_bienvenida_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/bienvenida/bienvenida.component */ "CBpB");
/* harmony import */ var _guard_isLogueado_is_logueado_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guard/isLogueado/is-logueado.guard */ "EI2K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'listado', component: _pages_listado_listado_component__WEBPACK_IMPORTED_MODULE_2__["ListadoComponent"] },
    // aqui ponemos el guard para que no deje entrar a admin si no esta loguedo
    {
        path: 'admin',
        component: _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        canActivate: [_guard_isLogueado_is_logueado_guard__WEBPACK_IMPORTED_MODULE_5__["IsLogueadoGuard"]],
    },
    {
        path: 'bienvenida',
        component: _pages_bienvenida_bienvenida_component__WEBPACK_IMPORTED_MODULE_4__["BienvenidaComponent"],
    },
    // si entras a la ruta por defecto, va a listado
    {
        path: '',
        redirectTo: 'listado',
        pathMatch: 'full',
    },
    // rutas inexistate a HOME
    {
        path: '**',
        redirectTo: 'listado',
        pathMatch: 'full',
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUK8":
/*!*****************************************************************!*\
  !*** ./src/app/components/listado-rol/listado-rol.component.ts ***!
  \*****************************************************************/
/*! exports provided: ListadoRolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoRolComponent", function() { return ListadoRolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");







function ListadoRolComponent_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rol_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", rol_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rol_r1, "");
} }
class ListadoRolComponent {
    constructor() {
        // para pasar al componente padre EventEmitter
        this.rol = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rolesArray = ['jugador', 'arbitro', 'entrenador', 'otros'];
        this.selectedItem = 'jugador';
    }
    ngOnInit() {
        // le ponemos por defecto jugador, se ejecuta cuando inicia el componente
        this.rol.emit(this.selectedItem);
    }
    onChange(ev) {
        // aca emito lo capturado al componente padre
        this.rol.emit(ev);
    }
}
ListadoRolComponent.ɵfac = function ListadoRolComponent_Factory(t) { return new (t || ListadoRolComponent)(); };
ListadoRolComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListadoRolComponent, selectors: [["app-listado-rol"]], outputs: { rol: "rol" }, decls: 6, vars: 2, consts: [["appearance", "outline"], ["name", "rol", "id", "rol", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function ListadoRolComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Rol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListadoRolComponent_Template_mat_select_ngModelChange_4_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ListadoRolComponent_mat_option_5_Template, 2, 2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rolesArray);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YWRvLXJvbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
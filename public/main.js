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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _components_listado_rol_listado_rol_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/listado-rol/listado-rol.component */ "zUK8");
/* harmony import */ var _components_jornadas_jornadas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/jornadas/jornadas.component */ "IaD1");





class ListadoComponent {
    constructor(router, db) {
        this.router = router;
        this.db = db;
        this.alumnosArray = [];
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
    crearAlumno(nombre, apellido1, tel, dni, email, apellido2) {
        //  añadimos alumnos a la base de datos y le creamos el ID
        this.alumnosRef.doc(dni).set({
            nombre: nombre,
            apellido1: apellido1,
            apellido2: apellido2,
            tel: tel,
            dni: dni,
            email: email,
            rol: this.rol,
            date: new Date(),
            jornada: parseInt(this.jornada),
        });
    }
    // tomamos el evento del hijo y lo asignamos en este componente
    rolDefinido(rolParametro) {
        this.rol = rolParametro;
    }
    jornadasDefinidas(ev) {
        this.jornada = ev;
    }
    salir() {
        this.router.navigateByUrl('login');
    }
}
ListadoComponent.ɵfac = function ListadoComponent_Factory(t) { return new (t || ListadoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
ListadoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListadoComponent, selectors: [["app-listado"]], decls: 43, vars: 0, consts: [[1, "menu"], [1, "campos"], [1, "agregar"], ["for", "", 1, "agregarAl"], ["type", "text", 1, "inp"], ["nombre", ""], ["apellido1", ""], ["apellido2", ""], ["type", "number", 1, "inp"], ["tel", ""], ["dni", ""], ["type", "mail", 1, "inp"], ["email", ""], [3, "rol"], [3, "jornada"], [3, "click"], [1, "salir", 3, "click"]], template: function ListadoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Apellido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 4, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Segundo Apellido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 4, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Telefono");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "DNI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 4, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "MAIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "app-listado-rol", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rol", function ListadoComponent_Template_app_listado_rol_rol_36_listener($event) { return ctx.rolDefinido($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "app-jornadas", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("jornada", function ListadoComponent_Template_app_jornadas_jornada_38_listener($event) { return ctx.jornadasDefinidas($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListadoComponent_Template_button_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33); return ctx.crearAlumno(_r0.value, _r1.value, _r2.value, _r3.value, _r4.value, _r5.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " CREAR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListadoComponent_Template_button_click_41_listener() { return ctx.salir(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Salir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_listado_rol_listado_rol_component__WEBPACK_IMPORTED_MODULE_3__["ListadoRolComponent"], _components_jornadas_jornadas_component__WEBPACK_IMPORTED_MODULE_4__["JornadasComponent"]], styles: ["main[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n.campos[_ngcontent-%COMP%] {\n  margin: 0 auto 30px auto;\n  border: 2px solid black;\n  border-radius: 5px;\n  columns: auto 1;\n  column-fill: balance;\n  column-gap: 4%;\n\n}\n.agregar[_ngcontent-%COMP%]{\n  display: flex;\n  flex-wrap: wrap;\n  align-items: baseline;\n  justify-content: space-evenly;\n}\n.agregarAl[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.inp[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  border: none;\n  border-bottom: 1px solid grey;\n  margin-right: 10px;\n}\n.alumnos[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 20px;\n  columns: auto 1;\n  column-gap: 3%;\n  column-rule: 2px solid grey;\n  column-fill: balance;\n}\n.alumno[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: baseline;\n  justify-content: space-between;\n  border-radius: 10px 0;\n  background-color: khaki;\n}\n.nombre[_ngcontent-%COMP%] {\n  padding: 5px;\n}\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.material-icons[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n}\n.salir[_ngcontent-%COMP%] {\n  width: 200px;\n  margin: 0 auto;\n  padding: 20px;\n}\n@media all and (min-width: 600px) {\n  .alumnos[_ngcontent-%COMP%] {\n    columns: auto 2;\n  }\n  .campos[_ngcontent-%COMP%]{\n    columns: auto 2;\n  }\n}\n@media all and (min-width: 900px) {\n  .alumnos[_ngcontent-%COMP%] {\n    columns: auto 4;\n    column-gap: 4vw;\n    padding: 4vw;\n  }\n  .campos[_ngcontent-%COMP%]{\n    columns: auto 3;\n    column-gap: 3vw;\n    padding: 3vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGNBQWM7O0FBRWhCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWU7RUFDZixjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGO0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtFQUNkO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZUFBZTtJQUNmLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6Imxpc3RhZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG59XG4uY2FtcG9zIHtcbiAgbWFyZ2luOiAwIGF1dG8gMzBweCBhdXRvO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2x1bW5zOiBhdXRvIDE7XG4gIGNvbHVtbi1maWxsOiBiYWxhbmNlO1xuICBjb2x1bW4tZ2FwOiA0JTtcblxufVxuLmFncmVnYXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5hZ3JlZ2FyQWwge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5pbnAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uYWx1bW5vcyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGNvbHVtbnM6IGF1dG8gMTtcbiAgY29sdW1uLWdhcDogMyU7XG4gIGNvbHVtbi1ydWxlOiAycHggc29saWQgZ3JleTtcbiAgY29sdW1uLWZpbGw6IGJhbGFuY2U7XG59XG4uYWx1bW5vIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBraGFraTtcbn1cbi5ub21icmUge1xuICBwYWRkaW5nOiA1cHg7XG59XG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNhbGlyIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjBweDtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLmFsdW1ub3Mge1xuICAgIGNvbHVtbnM6IGF1dG8gMjtcbiAgfVxuICAuY2FtcG9ze1xuICAgIGNvbHVtbnM6IGF1dG8gMjtcbiAgfVxufVxuXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xuICAuYWx1bW5vcyB7XG4gICAgY29sdW1uczogYXV0byA0O1xuICAgIGNvbHVtbi1nYXA6IDR2dztcbiAgICBwYWRkaW5nOiA0dnc7XG4gIH1cbiAgLmNhbXBvc3tcbiAgICBjb2x1bW5zOiBhdXRvIDM7XG4gICAgY29sdW1uLWdhcDogM3Z3O1xuICAgIHBhZGRpbmc6IDN2dztcbiAgfVxufVxuIl19 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ListadoAlumnosComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListadoAlumnosComponent_li_2_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const a_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.eliminar(a_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", a_r1.data.nombre, " ", a_r1.data.apellido1, " -");
} }
class ListadoAlumnosComponent {
    constructor(db) {
        this.db = db;
        this.alumnosArray = [];
        this.alumnosArrayFiltrado = [];
        this.alumnosRef = this.db.collection('alumnos');
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
            console.log('ARRAY MAPPED', arrayMapped);
        });
    }
    ngOnInit() { }
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
    }
    eliminar(id) {
        console.log('Nombre', id);
        this.alumnosRef.doc(id).delete();
    }
}
ListadoAlumnosComponent.ɵfac = function ListadoAlumnosComponent_Factory(t) { return new (t || ListadoAlumnosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
ListadoAlumnosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListadoAlumnosComponent, selectors: [["app-listado-alumnos"]], inputs: { jornada: "jornada" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 1, consts: [[1, "alumnos"], ["class", "alumno", 4, "ngFor", "ngForOf"], [1, "alumno"], [1, "nombre"], [1, "material-icons", 3, "click"]], template: function ListadoAlumnosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListadoAlumnosComponent_li_2_Template, 5, 2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alumnosArrayFiltrado);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["main[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n  }\n  .campos[_ngcontent-%COMP%] {\n    margin: 0 auto 30px auto;\n    border: 2px solid black;\n    border-radius: 5px;\n    columns: auto 1;\n    column-fill: balance;\n    column-gap: 4%;\n  \n  }\n  .agregar[_ngcontent-%COMP%]{\n    display: flex;\n    flex-wrap: wrap;\n    align-items: baseline;\n    justify-content: space-evenly;\n  }\n  .agregarAl[_ngcontent-%COMP%] {\n    margin-right: 5px;\n  }\n  .inp[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    border: none;\n    border-bottom: 1px solid grey;\n    margin-right: 10px;\n  }\n  .alumnos[_ngcontent-%COMP%] {\n    text-align: left;\n    padding: 20px;\n    columns: auto 1;\n    column-gap: 3%;\n    column-rule: 2px solid grey;\n    column-fill: balance;\n  }\n  .alumno[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: baseline;\n    justify-content: space-between;\n    border-radius: 10px 0;\n    background-color: khaki;\n  }\n  .nombre[_ngcontent-%COMP%] {\n    padding: 5px;\n  }\n  h2[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .material-icons[_ngcontent-%COMP%] {\n    align-items: center;\n    justify-content: center;\n  }\n  .salir[_ngcontent-%COMP%] {\n    width: 200px;\n    margin: 0 auto;\n    padding: 20px;\n  }\n  @media all and (min-width: 600px) {\n    .alumnos[_ngcontent-%COMP%] {\n      columns: auto 2;\n    }\n    .campos[_ngcontent-%COMP%]{\n      columns: auto 2;\n    }\n  }\n  @media all and (min-width: 900px) {\n    .alumnos[_ngcontent-%COMP%] {\n      \n      columns: auto 4;\n      column-gap: 4vw;\n      padding: 4vw;\n    }\n    .campos[_ngcontent-%COMP%]{\n      columns: auto 3;\n      column-gap: 3vw;\n      padding: 3vw;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhZG8tYWx1bW5vcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0VBQ2Y7RUFDQTtJQUNFLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsY0FBYzs7RUFFaEI7RUFDQTtJQUNFLGFBQWE7SUFDYixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0Isb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7RUFDZjtFQUVBO0lBQ0U7TUFDRSxlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxlQUFlO0lBQ2pCO0VBQ0Y7RUFFQTtJQUNFOztNQUVFLGVBQWU7TUFDZixlQUFlO01BQ2YsWUFBWTtJQUNkO0lBQ0E7TUFDRSxlQUFlO01BQ2YsZUFBZTtNQUNmLFlBQVk7SUFDZDtFQUNGIiwiZmlsZSI6Imxpc3RhZG8tYWx1bW5vcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbiB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuICAuY2FtcG9zIHtcbiAgICBtYXJnaW46IDAgYXV0byAzMHB4IGF1dG87XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbHVtbnM6IGF1dG8gMTtcbiAgICBjb2x1bW4tZmlsbDogYmFsYW5jZTtcbiAgICBjb2x1bW4tZ2FwOiA0JTtcbiAgXG4gIH1cbiAgLmFncmVnYXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICB9XG4gIC5hZ3JlZ2FyQWwge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG4gIC5pbnAge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAuYWx1bW5vcyB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGNvbHVtbnM6IGF1dG8gMTtcbiAgICBjb2x1bW4tZ2FwOiAzJTtcbiAgICBjb2x1bW4tcnVsZTogMnB4IHNvbGlkIGdyZXk7XG4gICAgY29sdW1uLWZpbGw6IGJhbGFuY2U7XG4gIH1cbiAgLmFsdW1ubyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBraGFraTtcbiAgfVxuICAubm9tYnJlIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbiAgaDIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAubWF0ZXJpYWwtaWNvbnMge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLnNhbGlyIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICBcbiAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAuYWx1bW5vcyB7XG4gICAgICBjb2x1bW5zOiBhdXRvIDI7XG4gICAgfVxuICAgIC5jYW1wb3N7XG4gICAgICBjb2x1bW5zOiBhdXRvIDI7XG4gICAgfVxuICB9XG4gIFxuICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xuICAgIC5hbHVtbm9zIHtcbiAgICAgIFxuICAgICAgY29sdW1uczogYXV0byA0O1xuICAgICAgY29sdW1uLWdhcDogNHZ3O1xuICAgICAgcGFkZGluZzogNHZ3O1xuICAgIH1cbiAgICAuY2FtcG9ze1xuICAgICAgY29sdW1uczogYXV0byAzO1xuICAgICAgY29sdW1uLWdhcDogM3Z3O1xuICAgICAgcGFkZGluZzogM3Z3O1xuICAgIH1cbiAgfVxuICAiXX0= */"] });


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

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class LoginComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    login() {
        if (this.email && this.password) {
            console.log('Hay un email y un password');
            // llevar a pagina listado
            this.router.navigateByUrl('listado');
        }
        else {
            console.log('falta email o pass');
            alert('Falta ingresar el Email o la Contraseña');
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 10, vars: 2, consts: [[1, "login"], [1, "formulario"], ["for", ""], ["type", "text", 1, "ingresar", 3, "ngModel", "ngModelChange"], ["type", "password", 1, "ingresar", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_4_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_7_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_8_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "ENTRAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 auto;\n  justify-content: center;\n  align-items: center;\n}\n\ninput[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.login[_ngcontent-%COMP%] {\n  display: flex;\n\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\n.formulario[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 10px;\n  border: 2px solid black;\n  display: flex;\n  flex-direction: column;\n}\n\n.ingresar[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  border: none;\n  border-bottom: 2px solid grey !important;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxhQUFhOztFQUViLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAgYXV0bztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlucHV0IHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLmxvZ2luIHtcbiAgZGlzcGxheTogZmxleDtcblxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmZvcm11bGFyaW8ge1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5pbmdyZXNhciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZXkgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuIl19 */"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function JornadasComponent_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jor_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", jor_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", jor_r1, " ");
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
JornadasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JornadasComponent, selectors: [["app-jornadas"]], outputs: { jornada: "jornada" }, decls: 5, vars: 2, consts: [[1, "jornada"], ["for", ""], ["name", "", "id", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function JornadasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Jornada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function JornadasComponent_Template_select_ngModelChange_3_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, JornadasComponent_option_4_Template, 2, 2, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jornadasArray);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], styles: [".jornada[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvcm5hZGFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCIiwiZmlsZSI6Impvcm5hZGFzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuam9ybmFkYXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNTBweDtcbn0iXX0= */"] });


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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["@import url(\"https://meyerweb.com/eric/tools/css/reset/reset.css\");\n\n.entrar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtFQUFrRTs7QUFFbEU7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0L3Jlc2V0LmNzc1wiKTtcblxuLmVudHJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuIl19 */"] });


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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _components_listado_rol_listado_rol_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/listado-rol/listado-rol.component */ "zUK8");
/* harmony import */ var _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/admin/admin.component */ "sS4B");
/* harmony import */ var _components_listado_alumnos_listado_alumnos_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/listado-alumnos/listado-alumnos.component */ "7dW6");
/* harmony import */ var _components_jornadas_jornadas_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/jornadas/jornadas.component */ "IaD1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");




















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
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(config),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorageModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        _pages_listado_listado_component__WEBPACK_IMPORTED_MODULE_8__["ListadoComponent"],
        _components_listado_rol_listado_rol_component__WEBPACK_IMPORTED_MODULE_14__["ListadoRolComponent"],
        _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_15__["AdminComponent"],
        _components_listado_alumnos_listado_alumnos_component__WEBPACK_IMPORTED_MODULE_16__["ListadoAlumnosComponent"],
        _components_jornadas_jornadas_component__WEBPACK_IMPORTED_MODULE_17__["JornadasComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorageModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"]] }); })();


/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _components_jornadas_jornadas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/jornadas/jornadas.component */ "IaD1");
/* harmony import */ var _components_listado_alumnos_listado_alumnos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/listado-alumnos/listado-alumnos.component */ "7dW6");




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
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 2, vars: 1, consts: [[3, "jornada"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-jornadas", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("jornada", function AdminComponent_Template_app_jornadas_jornada_0_listener($event) { return ctx.filtrarPorJornada($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-listado-alumnos", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("jornada", ctx.jornadaAFiltrar);
    } }, directives: [_components_jornadas_jornadas_component__WEBPACK_IMPORTED_MODULE_2__["JornadasComponent"], _components_listado_alumnos_listado_alumnos_component__WEBPACK_IMPORTED_MODULE_3__["ListadoAlumnosComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuY3NzIn0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'listado', component: _pages_listado_listado_component__WEBPACK_IMPORTED_MODULE_2__["ListadoComponent"] },
    {
        path: 'admin',
        component: _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ListadoRolComponent_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rol_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", rol_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rol_r1);
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
ListadoRolComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListadoRolComponent, selectors: [["app-listado-rol"]], outputs: { rol: "rol" }, decls: 4, vars: 2, consts: [["for", "rol", 1, "agregarAl"], ["name", "rol", "id", "rol", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function ListadoRolComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Rol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListadoRolComponent_Template_select_ngModelChange_2_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ListadoRolComponent_option_3_Template, 2, 2, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rolesArray);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YWRvLXJvbC5jb21wb25lbnQuY3NzIn0= */"] });


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
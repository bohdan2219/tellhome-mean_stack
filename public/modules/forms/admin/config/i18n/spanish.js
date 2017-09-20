'use strict';

angular.module('forms').config(['$translateProvider', function ($translateProvider) {

	$translateProvider.translations('es', {

		//Configure Form Tab View
		ADVANCED_SETTINGS: 'Configuraciones avanzadas',
		FORM_NAME: 'Nombre del formulario',
		FORM_STATUS: 'Estado del formulario',
		PUBLIC: 'Público',
		PRIVATE: 'Privado',
		GA_TRACKING_CODE: 'Código de Google Analytics',
		DISPLAY_FOOTER: '¿Mostrar pie de página?',
		SAVE_CHANGES: 'Grabar',
		CANCEL: 'Cancelar',
		DISPLAY_START_PAGE: '¿Mostrar página de inicio?',
		DISPLAY_END_PAGE: '¿Mostrar paǵina de fin?',

		//List Forms View
		CREATE_A_NEW_FORM: 'Crear formulario',
		CREATE_FORM: 'Crear formulario',
		CREATED_ON: 'Creado en',
		MY_FORMS: 'Mis formularios',
		NAME: 'Nombre',
		LANGUAGE: 'Idioma',
		FORM_PAUSED: 'Formulario pausado',

		//Edit Field Modal
		EDIT_FIELD: 'Editar este campo',
		SAVE_FIELD: 'Grabar',
		ON: 'ON',
		OFF: 'OFF',
		REQUIRED_FIELD: 'Requerido',
		LOGIC_JUMP: 'Salto lógico',
		SHOW_BUTTONS: 'Botones adicionales',
		SAVE_START_PAGE: 'Grabar',

		//Admin Form View
		ARE_YOU_SURE: '¿Estás absolutamente seguro?',
		READ_WARNING: '¡Algo malo ocurrirá si no lees esto!',
		DELETE_WARNING1: 'Esta acción no tiene vuelta atrás. Esto borrará permanentemente el "',
		DELETE_WARNING2: '" formulario y todos los datos asociados.',
		DELETE_CONFIRM: 'Por favor escribí el nombre del formulario para confirmar.',
		I_UNDERSTAND: 'Entiendo las consecuencias y quiero borrarlo.',
		DELETE_FORM_SM: 'Borrar',
		DELETE_FORM_MD: 'Borrar formulario',
		DELETE: 'Borrar',
		FORM: 'Formulario',
		VIEW: 'Vista',
		LIVE: 'Online',
		PREVIEW: 'Vista previa',
		COPY: 'Copiar',
		COPY_AND_PASTE: 'Copiar y pegar esto para agregar su TellForm a su sitio web',
		CHANGE_WIDTH_AND_HEIGHT: 'Cambie los valores de ancho y altura para adaptar el formulario a sus necesidades',
		POWERED_BY: 'Con la tecnlogía de',
		TELLFORM_URL: 'Tu TellForm está en esta URL permanente',

		//Edit Form View
		DISABLED: 'Deshabilitado',
		YES: 'SI',
		NO: 'NO',
		ADD_LOGIC_JUMP: 'Agregar salto lógico',
		ADD_FIELD_LG: 'Click para agregar campo',
		ADD_FIELD_MD: 'Agregar nuevo campo',
		ADD_FIELD_SM: 'Agregar campo',
		EDIT_START_PAGE: 'Editar paǵina de inicio',
		EDIT_END_PAGE: 'Editar página de finalización',
		WELCOME_SCREEN: 'Comienzo',
		END_SCREEN: 'Fin',
		INTRO_TITLE: 'Título',
		INTRO_PARAGRAPH: 'Parágrafo',
		INTRO_BTN: 'Botón de comienzo',
		TITLE: 'Título',
		PARAGRAPH: 'Paragrafo',
		BTN_TEXT: 'Botón para volver atrás',
		BUTTONS: 'Botones',
		BUTTON_TEXT: 'Texto',
		BUTTON_LINK: 'Link',
		ADD_BUTTON: 'Agregar Botón',
		PREVIEW_FIELD: 'Vista previa Pregunta',
		QUESTION_TITLE: 'Título',
		QUESTION_DESCRIPTION: 'Descripción',
		OPTIONS: 'Opciones',
		ADD_OPTION: 'Agregar Opciones',
		NUM_OF_STEPS: 'Cantidad de pasos',
		CLICK_FIELDS_FOOTER: 'Click en los campos para agregar',
		SHAPE: 'Forma',
		IF_THIS_FIELD: 'Si este campo',
		IS_EQUAL_TO: 'es igual a',
		IS_NOT_EQUAL_TO: 'no es igual a',
		IS_GREATER_THAN: 'es mayor que',
		IS_GREATER_OR_EQUAL_THAN: 'es mayor o igual que',
		IS_SMALLER_THAN: 'es menor que',
		IS_SMALLER_OR_EQUAL_THAN: 'is menor o igual que',
		CONTAINS: 'contiene',
		DOES_NOT_CONTAINS: 'no contiene',
		ENDS_WITH: 'termina con',
		DOES_NOT_END_WITH: 'no termina con',
		STARTS_WITH: 'comienza con',
		DOES_NOT_START_WITH: 'no comienza con',
		THEN_JUMP_TO: 'luego salta a',

		//Edit Submissions View
		TOTAL_VIEWS: 'Total de visitas únicas',
		RESPONSES: 'respuestas',
		COMPLETION_RATE: 'Taza de terminación',
		AVERAGE_TIME_TO_COMPLETE: 'Promedio de tiempo de rellenado',

		DESKTOP_AND_LAPTOP: 'Computadora',
		TABLETS: 'Tablets',
		PHONES: 'Móviles',
		OTHER: 'Otros',
		UNIQUE_VISITS: 'Visitas únicas',

		FIELD_TITLE: 'Título de campo',
		FIELD_VIEWS: 'Vistas de campo',
		FIELD_DROPOFF: 'Finalización de campo',
		FIELD_RESPONSES: 'Respuestas de campo',
		DELETE_SELECTED: 'Borrar selección',
		EXPORT_TO_EXCEL: 'Exportar a Excel',
		EXPORT_TO_CSV: 'Exportar a CSV',
		EXPORT_TO_JSON: 'Exportar a JSON',
		PERCENTAGE_COMPLETE: 'Porcentaje de completitud',
		TIME_ELAPSED: 'Tiempo usado',
		DEVICE: 'Dispositivo',
		LOCATION: 'Lugar',
		IP_ADDRESS: 'Dirección IP',
		DATE_SUBMITTED: 'Fecha de envío',
		GENERATED_PDF: 'PDF generado',

		//Design View
		BACKGROUND_COLOR: 'Color de fondo',
		DESIGN_HEADER: 'Cambiar diseño de formulario',
		QUESTION_TEXT_COLOR: 'Color de la pregunta',
		ANSWER_TEXT_COLOR: 'Color de la respuesta',
		BTN_BACKGROUND_COLOR: 'Color de fondo del botón',
		BTN_TEXT_COLOR: 'Color del texto del botón',

    //Share View
    EMBED_YOUR_FORM: 'Pone tu formulario',
    SHARE_YOUR_FORM: 'Compartí tu formulario',

		//Admin Tabs
		CREATE_TAB: 'Crear',
		DESIGN_TAB: 'Diseño',
		CONFIGURE_TAB: 'Configuración',
		ANALYZE_TAB: 'Análisis',
	    SHARE_TAB: 'Compartir',

	    //Field Types
	    SHORT_TEXT: 'Texto corto',
	    EMAIL: 'Email',
	    MULTIPLE_CHOICE: 'Opciones múltiples',
	    DROPDOWN: 'Desplegable',
	    DATE: 'Fecha',
	    PARAGRAPH_T: 'Párrafo',
	    YES_NO: 'Si/No',
	    LEGAL: 'Legal',
	    RATING: 'Puntaje',
	    NUMBERS: 'Números',
	    SIGNATURE: 'Firma',
	    FILE_UPLOAD: 'Subir archivo',
	    OPTION_SCALE: 'Escala',
	    PAYMENT: 'Pago',
	    STATEMENT: 'Declaración',
	    LINK: 'Enlace',

	    FORM_SUCCESS: '¡El formulario ha sido enviado con éxito!',
		REVIEW: 'Revisar',
		BACK_TO_FORM: 'Regresar al formulario',
		EDIT_FORM: '',
		CREATE_FORM: '',
		ADVANCEMENT: '{{done}} de {{total}} contestadas',
		CONTINUE_FORM: 'Continuar al formulario',
		REQUIRED: 'Información requerida',
		COMPLETING_NEEDED: '{{answers_not_completed}} respuesta(s) necesita(n) ser completada(s)',
		OPTIONAL: 'Opcional',
		ERROR_EMAIL_INVALID: 'Favor de proporcionar un correo electrónico válido',
		ERROR_NOT_A_NUMBER: 'Por favor, introduzca sólo números válidos',
		ERROR_URL_INVALID: 'Favor de proporcionar un url válido',
		OK: 'OK',
		ENTER: 'pulse INTRO',
		YES: 'Si',
		NO: 'No',
		NEWLINE: 'presione SHIFT+INTRO para crear una nueva línea',
		CONTINUE: 'Continuar',
		LEGAL_ACCEPT: 'Yo acepto',
		LEGAL_NO_ACCEPT: 'Yo no acepto',
		DELETE: 'Eliminar',
		CANCEL: 'Cancelar',
		SUBMIT: 'Registrar',
		UPLOAD_FILE: 'Cargar el archivo',
		Y: 'S',
		N: 'N'
	});
}]);

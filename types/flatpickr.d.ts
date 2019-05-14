export = flatpickr;
declare function flatpickr(selector: any, config: any): any;
declare namespace flatpickr {
    function compareDates(date1: any, date2: any, timeless: any): any;
    namespace defaultConfig {
        const allowInput: boolean;
        const altFormat: string;
        const altInput: boolean;
        const altInputClass: string;
        const animate: boolean;
        const ariaDateFormat: string;
        const clickOpens: boolean;
        const closeOnSelect: boolean;
        const conjunction: string;
        const dateFormat: string;
        const defaultHour: number;
        const defaultMinute: number;
        const defaultSeconds: number;
        const disable: any[];
        const disableMobile: boolean;
        const enable: any[];
        const enableSeconds: boolean;
        const enableTime: boolean;
        function errorHandler(err: any): any;
        function getWeek(givenDate: any): any;
        const hourIncrement: number;
        const ignoredFocusElements: any[];
        const inline: boolean;
        const locale: string;
        const minuteIncrement: number;
        const mode: string;
        const nextArrow: string;
        const noCalendar: boolean;
        const now: Date;
        const onChange: any[];
        const onClose: any[];
        const onDayCreate: any[];
        const onDestroy: any[];
        const onKeyDown: any[];
        const onMonthChange: any[];
        const onOpen: any[];
        const onParseConfig: any[];
        const onPreCalendarPosition: any[];
        const onReady: any[];
        const onValueUpdate: any[];
        const onYearChange: any[];
        const plugins: any[];
        const position: string;
        const positionElement: any;
        const prevArrow: string;
        const shorthandCurrentMonth: boolean;
        const showMonths: number;
        const time_24hr: boolean;
        const weekNumbers: boolean;
        const wrap: boolean;
    }
    function formatDate(dateObj: any, frmt: any, overrideLocale: any): any;
    const l10ns: {
        default: {
            amPM: string[];
            daysInMonth: number[];
            firstDayOfWeek: number;
            months: {
                longhand: any[];
                shorthand: any[];
            };
            ordinal: Function;
            rangeSeparator: string;
            scrollTitle: string;
            toggleTitle: string;
            weekAbbreviation: string;
            weekdays: {
                longhand: any[];
                shorthand: any[];
            };
            yearAriaLabel: string;
        };
        en: {
            amPM: string[];
            daysInMonth: number[];
            firstDayOfWeek: number;
            months: {
                longhand: any[];
                shorthand: any[];
            };
            ordinal: Function;
            rangeSeparator: string;
            scrollTitle: string;
            toggleTitle: string;
            weekAbbreviation: string;
            weekdays: {
                longhand: any[];
                shorthand: any[];
            };
            yearAriaLabel: string;
        };
    };
    function localize(l10n: any): void;
    function parseDate(date: any, givenFormat: any, timeless: any, customLocale: any): any;
    function setDefaults(config: any): void;
}

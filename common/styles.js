import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: inherit;
        box-sizing: border-box;
    }
    html {
        font-size: 16px;
        line-height: 1.75;
    }
    body {
        overflow: hidden;
        line-height: 1.5;
        font-size: 1rem;
        font-family: "Ubuntu", sans-serif;
    }
    .danger {
        background: rgba(255, 0, 0, 0.7);
    }
    .Toastify__toast {
        font-family: inherit;
    }
    .Toastify__toast--dark {
        background: black;
    }
    .Toastify__toast--success {
        background: green;
    }
    .Toastify__toast--error {
        background: red;
    }
    .Toastify__progress-bar--dark {
        background: orange;
    }
    table {
        width: 100%;
        border-collapse: collapse;
    }
    table th {
        word-break: break-word;
        text-align: left;
        font-weight: normal;
    }
    table th:last-child {
        border-left: solid 1px;
    }
    table td {
        border-top: solid 1px;
        border-bottom: solid 1px;
    }
    table td:last-child {
        border-left: solid 1px;
    }
    table th, table td {
        padding: 0;
        vertical-align: middle;
    }
    table tr:last-child td {
        border-bottom: 0;
    }
    table button {
        margin-right: 0.5rem;
    }
    svg {
        font-size: 1.25rem;
        max-height: 22px;
    }
    .children {
        animation: beat 0.5s infinite alternate;
        transform-origin: center;
    }
    .main {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100vh;
        height: calc(var(--vh, 1vh) * 100);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .main__ft {
        gap: 0.5rem;
        display: flex;
        justify-content: center;
    }
    .main__ft__a {
        max-height: 4rem;
        max-width: 4rem;
    }
    .main__text {
        display: flex;
        flex-direction: column;
        max-width: 280px;
        padding: 1rem;
        text-align: center;
    }
    .main__text h1 {
        margin: 0;
        line-height: 1;
    }
    .main__text h2 {
        margin: 0.5rem 0;
        font-size: 16px;
    }
    .main__text img {
        width: 100%;
        height: auto;
        object-fit: contain;
    }
    .main__text a {
        display: flex;
        padding: 0.5rem;
        border: 1px solid #333;
    }
    .main__text p {
        margin-bottom: 0;
    }
    .main__a {
        margin-left: 0.5rem;
    }
    .light .main__ft__a {
        border: 1px solid #1c9cea;
    }
    .nav {
        position: fixed;
        padding: 1rem;
        top: 0;
        left: 0;
        right: 0;
        z-index: 2;
    }
    .nav__label {
        padding-bottom: 1rem;
        display: flex;
        align-items: center;
    }
    .nav__label svg {
        margin-right: 0.5rem;
    }
    .nav__row {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    .nav__row--two {
        align-items: center;
        justify-content: space-between;
    }
    .nav__content {
        display: flex;
        justify-content: flex-end;
    }
    .nav__form {
        margin: 0;
    }
    .nav__form__input {
        width: 140px;
        font-size: inherit;
    }
    .nav__form__items {
        margin-top: 0.5rem;
        display: flex;
        justify-content: flex-end;
    }
    .nav__form__btn {
        margin-left: 0.5rem;
        display: flex;
        align-items: center;
    }
    .nav__form__btn--off {
        pointer-events: none;
        opacity: 0.5;
    }
    .nav__btn {
        margin-left: 1rem;
    }
    .nav__btn:first-child {
        margin-left: 0;
    }
    .nav__btn--hide {
        display: none;
    }
    .modal {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 4;
        overflow-y: auto;
        overflow-x: hidden;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .modal::-webkit-scrollbar {
        display: none;
    }
    .modal__search {
        position: sticky;
        top: 59.25px;
        padding: 1rem;
        background: inherit;
        display: grid;
    }
    .modal__search--filled {
        grid-gap: 15px;
        grid-template-columns: minmax(0, 1fr) auto;
    }
    .modal__input {
        border: 0;
        padding: 0.5rem;
        width: 100%;
        font-size: inherit;
    }
    .modal__header {
        background: inherit;
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        z-index: 5;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid;
    }
    .modal__aside {
        display: flex;
        align-items: center;
    }
    .modal__aside *:last-child, .modal__footer *:last-child {
        margin-left: 0.5rem;
    }
    .modal__ul {
        margin: 0;
        padding: 0 1rem;
        list-style: none;
    }
    .modal__ul li {
        margin: 0.5rem 0;
        padding: 0.5rem 0;
        border-bottom: 1px solid;
    }
    .modal__ul li:last-child {
        border-bottom: 0;
    }
    .modal__reset {
        display: none;
    }
    .modal__reset--visible {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .li--flex {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .li--flex span {
        flex-grow: 1;
    }
    .li--flex svg {
        min-width: 1.25rem;
        margin: 0 0 0 0.5rem;
    }
    .accordion__item {
        border-top: 1px solid;
    }
    .accordion__item .active {
        border-bottom: 0;
    }
    .accordion__item .accordion__panel {
        padding: 0;
    }
    .accordion__item .accordion__btn {
        min-height: 44px;
    }
    .accordion__item .accordion__btn:hover {
        cursor: pointer;
    }
    .accordion__btn {
        display: flex;
        justify-content: space-between;
    }
    .accordion__data {
        display: flex;
    }
    .accordion__details {
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .accordion__details > * {
        margin: 0;
    }
    .accordion__heading:focus, .accordion__details:focus, .accordion__btn:focus {
        outline: none;
    }
    .accordion__country {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .accordion__flag__img {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        vertical-align: middle;
        min-height: 1rem;
        min-width: auto;
        object-fit: contain;
    }
    .accordion__content {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        min-width: auto;
        height: inherit;
        margin-left: 0.5rem;
        margin-right: 1rem;
    }
    .accordion__title {
        display: flex;
        align-items: center;
    }
    .accordion__title svg {
        min-width: 20px;
        margin-right: 0.25rem;
    }
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.75);
        z-index: 3;
    }
    .controls {
        display: flex;
    }
    .controls > * {
        margin-right: 1rem;
    }
    .title {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .empty-cart, .empty-list {
        margin: 0;
        padding: 1rem;
    }
    .error {
        color: white;
        background: black;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        height: calc(var(--vh, 1vh) * 100);
        overflow: hidden;
        padding: 1rem;
    }
    .error h1 {
        line-height: 1.25;
        text-align: center;
    }
    .footer {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 1rem;
        z-index: 1;
        top: 50%;
        transform: translateY(-50%);
    }
    .footer a {
        margin-left: 0.25rem;
        max-height: 22px;
    }
    .footer small {
        max-height: 16px;
        display: flex;
        align-items: flex-end;
    }
    .footer > * {
        margin-top: 1rem;
    }
    .footer > *:first-child {
        margin: 0;
    }
    .footer svg {
        height: 100%;
    }
    .trademark {
        position: fixed;
        left: 0.75rem;
        bottom: 0.75rem;
        font-size: 0.7rem;
    }
    @media screen and (min-width: 320px) {
        table th, table td {
            padding: 0.5rem 1rem;
        }
        .accordion__details > * {
            margin: 0 1rem 0 13px;
        }
        .accordion__flag__img {
            min-height: 2.75rem;
            min-width: 5rem;
        }
        .accordion__content {
            min-width: 3rem;
            margin-left: 0;
            margin-right: 0;
        }
    }
    @media screen and (min-width: 540px) {
        font-size: 18px;
    }
    @media screen and (min-width: 768px) {
        .nav__label {
            padding-right: 1rem;
            padding-bottom: 0;
        }
        .nav__row {
            flex-direction: row;
        }
        .main__text {
            max-width: 280px;
        }
    }
    @keyframes beat {
        to {
            transform: scale(1.2);
        }
    }
    /* THEME */
    a {
        color: orange;
        text-decoration: none;
    }
    a:hover, a:focus, a:active {
        color: #996300;
    }
    .light a {
        color: #166dba;
    }
    .light a:hover, .light a:focus, .light a:active {
        color: #10538d;
    }
    .nav--two {
        color: white;
        background: rgba(0, 0, 0, 0.5);
    }
    .light .nav--two {
        color: black;
        background: rgba(255, 255, 255, 0.75);
    }
    small {
        color: white;
    }
    .light small {
        color: black;
    }
    .main, .modal, .accordion__btn {
        color: #ccc;
    }
    .light .main, .light .modal, .light .accordion__btn {
        color: black;
    }
    .modal, .accordion__btn {
        background: rgba(0, 0, 0, 0.5);
    }
    .light .modal, .light .accordion__btn {
        background: rgba(255, 255, 255, 0.5);
    }
    body {
        background-color: #000;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23070707' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%230e0e0e' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23141414' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%231b1b1b' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23222222' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
        background-attachment: fixed;
        background-size: cover;
    }
    body.light {
        background-color: #1e88e5;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%235498e9' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%2375a9ed' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%2391bbf1' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23aacdf5' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23c2dff8' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23cfe5f9' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23dbecfb' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23e7f2fc' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23f3f9fe' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23ffffff' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E");
        background-attachment: fixed;
        background-size: cover;
    }
    .accordion__btn:hover {
        color: black;
        background: white;
    }
    .light .accordion__btn:hover {
        color: white;
        background: black;
    }
    .active .accordion__btn:hover, .light .active .accordion__btn:hover {
        color: inherit;
    }
    .table th {
        border-color: #333;
    }
    .table th:last-child {
        border-color: #333;
    }
    .table td {
        border-color: #333;
    }
    .table td:last-child {
        border-color: #333;
    }
    .light .table th {
        border-color: #ccc;
    }
    .light .table th:last-child {
        border-color: #ccc;
    }
    .light .table td {
        border-color: #ccc;
    }
    .light .table td:last-child {
        border-color: #ccc;
    }
    .modal__header {
        border-color: #333;
    }
    .modal__ul li {
        border-color: #333;
    }
    .modal__input {
        color: white;
    background: #111;
    }
    .light .modal__header {
        border-color: #ddd;
    }
    .light .modal__ul li {
        border-color: #ccc;
    }
    .light .modal__input {
        color: black;
        background: rgba(255, 255, 255, 0.5);
    }
    .accordion__item {
        border-color: #222;
    }
    .accordion__item .active {
        border-color: #333;
    }
    .accordion__item .active .accordion__btn {
        background: #222;
    }
    .light .accordion__item {
        border-color: #ddd;
    }
    .light .accordion__item .active {
        border-color: #ccc;
    }
    .light .accordion__item .active .accordion__btn {
        background: #ddd;
    }
    .main__a {
        color: #1c9cea;
    }
    .main__a:hover, .main__a:focus {
        color: #106faa;
    }
    .light .main__a {
        color: #166dba;
    }
    .light .main__a:hover, .light .main__a:focus {
        color: #0e6092;
    }
    .main__a--yt {
        color: #f00;
    }
    .main__a--yt:hover, .main__a--yt:focus {
        color: #c00;
    }
    .light .main__a--yt {
        color: #f00;
    }
    .light .main__a--yt:hover, .light .main__a--yt:focus {
        color: #c00;
    }
    .main__a--rd {
        color: #ff4500;
    }
    .main__a--rd:hover, .main__a--rd:focus {
        color: #cc3700;
    }
    .light .main__a--rd {
        color: #ff4500;
    }
    .light .main__a--rd:hover, .light .main__a--rd:focus {
        color: #cc3700;
    }
    .main__ft__a {
        color: inherit;
        background: rgba(0, 0, 0, 0.25);
        transition: background-color 0.7s ease;
    }
    .main__ft__a:hover, .main__ft__a:focus, .main__ft__a:active {
        color: inherit;
        transition: background-color 0.7s ease;
        background: rgba(0, 0, 0, 0.75);
    }
    .light .main__ft__a {
        color: inherit;
        background: rgba(28, 156, 234, 0.25);
        transition: background-color 0.7s ease;
    }
    .light .main__ft__a:hover, .light .main__ft__a:focus, .light .main__ft__a:active {
        color: inherit;
        transition: background-color 0.7s ease;
        background: rgba(28, 156, 234, 0.75);
    }
    .green {
        color: green;
    }
    .light .green {
        color: darkgreen;
    }
    .red {
        color: red;
    }
    .light .red {
        color: darkred;
    }
`;

export default GlobalStyle;

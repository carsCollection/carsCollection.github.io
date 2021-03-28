import { html } from '../node_modules/lit-html/lit-html.js';

const detailsTemplate = () => html`
<section class="details">
    <div>
        <h1>Car details</h1>
    </div>

    <div class="my-collection">
        <img src="https://www.firstvehicleleasing.co.uk/img/vehicles/e_31513.jpg" alt="car">
        <p><span>Brand & Model</span></p>
        <p><span>Year of production</span></p>
        <p>Price <span>$100</span></p>
        <a class="in-details" href="">Edit</a>
        <a class="in-details" href="">Delete</a>
    </div>
</section>`;
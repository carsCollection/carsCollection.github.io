import { html } from 'https://unpkg.com/lit-html?module';

const myCarsTemplate = () => html`
<section class="my-cars">
    <div>
        <h1>My Cars</h1>
        <p class="list">This is a list of your favourite cars!</p>
    </div>

    <div class="my-collection">
        <img src="https://www.firstvehicleleasing.co.uk/img/vehicles/e_31513.jpg" alt="car">
        <p><span>Brand & Model</span></p>
        <p><span>Year of production</span></p>
        <p>Price <span>$100</span></p>
        <a class="btn" href="">Details</a>
    </div>
</section>`;
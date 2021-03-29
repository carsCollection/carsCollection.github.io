import { html } from 'https://unpkg.com/lit-html?module';
import { getCars } from '../src/api/data.js';

const allCarsTemplate = (data) => html`
<section class="my-cars">
    <h1>All Cars</h1>
    <div class="my-collection">

        ${data.length ? html`${data.map(carTemplate)}` : html`<p class="no-cars">No cars in database.</p>`}

    </div>
</section>`;

const carTemplate = (car) => html`
<div>
    <p>${car.title}</p>
    <img alt="no-pic" src=${car.imageUrl}>
</div>
<div>
    <a class="btn" href="/details/${car.objectId}">Details</a>
</div>`;

export async function allCarsPage(ctx) {
    const [data] = await getCars();

    ctx.render(allCarsTemplate(data));
}
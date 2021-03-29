import { html } from 'https://unpkg.com/lit-html?module';
import { createCar } from '../src/api/data.js';

const createTemplate = (onSubmit, isFilled) => html`
<section class="createCar">
    <div>
        <h1>Create New Car</h1>
        ${isFilled ? html`<p style="color: red">Please fill in all fields!</p>` : ''}

    </div>

    <form @submit=${onSubmit}>
        <div>
            <label for="new-brand">Brand</label>
            <input name="new-brand" type="text">
            <label for="new-model">Model</label>
            <input name="new-model" type="text">
            <label for="new-year">Year of production</label>
            <input name="new-year" type="number">
            <label for="new-price">Price</label>
            <input name="new-price" type="number">
            <label for="new-img">Image URL</label>
            <input name="new-img" type="text">
            <input type="submit" value="Create">
        </div>
    </form>
</section>`;

export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const car = {
            brand: formData.get('new-brand'),
            model: formData.get('new-model'),
            year: Number(formData.get('new-year')),
            price: Number(formData.get('new-price')),
            imageUrl: formData.get('new-img')
        }

        if (!car.brand || !car.model || !car.price || !car.year || !car.imageUrl) {
            return ctx.render(createTemplate(onSubmit, true))
        }

        await createCar(car);
        event.target.reset();
        ctx.page.redirect('/allCars');
    }
}

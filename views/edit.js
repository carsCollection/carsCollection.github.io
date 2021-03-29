import { html } from 'https://unpkg.com/lit-html?module';
import { editCarById, getCarById } from '../src/api/data.js';

const editTemplate = (car, onSubmit, isFilled) => html`
<section class="createCar">
    <div>
        <h1>Edit Car</h1>
        ${isFilled ? html`<p>Please fill in all fields!</p>` : ''}

    </div>

    <form @submit=${onSubmit}>
        <div>
            <label for="new-brand">Brand</label>
            <input name="new-brand" type="text" .value=${car.brand}>
            <label for="new-model">Model</label>
            <input name="new-model" type="text" .value=${car.model}>
            <label for="new-year">Year of production</label>
            <input name="new-year" type="number" .value=${car.year}>
            <label for="new-price">Price</label>
            <input name="new-price" type="number" .value=${car.price}>
            <label for="new-img">Image URL</label>
            <input name="new-img" type="text" .value=${car.imageUrl}>
            <input type="submit" value="Update">
        </div>
    </form>
</section>`;

export async function editPage(ctx) {
    const carId = ctx.params.id;
    const car = await getCarById(carId);
    ctx.render(editTemplate(car, onSubmit, false));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = {
            brand: formData.get('new-brand'),
            model: formData.get('new-model'),
            year: Number(formData.get('new-year')),
            price: Number(formData.get('new-price')),
            imageUrl: formData.get('new-img')
        }

        if (!data.brand || !data.model || !data.year || !data.price || !data.imageUrl) {
            return ctx.render(editTemplate(car, onSubmit, true));
        }

        await editCarById(carId, data);
        event.target.reset();
        ctx.page.redirect(`/details/${carId}`);
    }
}
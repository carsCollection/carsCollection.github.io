import { html } from 'https://unpkg.com/lit-html?module';

const editTemplate = () => html`
<section class="createCar">
    <div>
        <h1>Edit Car</h1>
        <p>Please fill in all fields!</p>
    </div>

    <form action="">
        <div>
            <label for="new-brand">Brand</label>
            <input name="new-brand" type="text">
            <label for="new-model">Model</label>
            <input name="new-model" type="text">
            <label for="new-year">Year of production</label>
            <input name="new-year" type="number">
            <label for="new-price">Price</label>
            <input name="new-price" type="number">
            <input type="submit" value="Update">
        </div>
    </form>
</section>`;
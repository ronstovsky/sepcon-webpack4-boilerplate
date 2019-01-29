import SepCon from 'sepcon';
export default SepCon.createComponent({id: 'app'}, {
    view: {
        lifecycle: {
            render() {
                return `<div>Hello World</div>`;
            }
        }
    }
});
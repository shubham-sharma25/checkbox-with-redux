import { shallow } from 'enzyme';
import Countries from '../../components/Countries';
import { initialState } from '../../redux/state';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from 'react-redux';
import store from '../../redux/store';

configure({ adapter: new Adapter() });

const props = initialState;
describe("Countries component ", () => {
    test("should display input tag for checkbox", () => {
        let wrapper = shallow(
            <Provider store={store}>
                <Countries {...props} />
            </Provider>
        )
        expect(wrapper.find("input")).toBeDefined();
    });
    test("should render the selected countries component", () => {
        let wrapper = shallow(
            <Provider store={store}>
                <Countries {...props} />
            </Provider>
        )
        expect(wrapper.find("SelectedCountries")).toBeDefined();
    });
});
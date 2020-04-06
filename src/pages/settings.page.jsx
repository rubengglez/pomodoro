import React from 'react';
import ButtonsGroup from '../shared/buttons-group/buttonsGroup.component';
import LinkWithImage from '../shared/linkWithImage.component';

class SettingsPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <LinkWithImage imageName="slack" routeLink="#" />
                <ButtonsGroup reset />
            </React.Fragment>
        )
    }
}

export default SettingsPage
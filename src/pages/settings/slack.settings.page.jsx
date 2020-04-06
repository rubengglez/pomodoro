import React from 'react';
import ButtonsGroup from '../../shared/buttons-group/buttonsGroup.component';
import Input from '../../shared/input';

class SlackSettingsPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Input defaultValue="" descriptionLabel="Insert your token" />
                <ButtonsGroup start />
            </div>
        )
    }
}

export default SlackSettingsPage
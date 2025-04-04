import { __experimentalToggleGroupControl as ToggleGroupControl, __experimentalToggleGroupControlOption as ToggleGroupControlOption, SelectControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { lock, unlock, starFilled } from '@wordpress/icons';

const AttendeeFields = () => {
    const [nameState, setNameState] = useState('enable');
    const [emailState, setEmailState] = useState('require');
    const [fieldType, setFieldType] = useState('');

    const optionTooltips = {
        disable: 'This field will not appear on the registration form',
        enable: 'This field will be optional on the registration form',
        require: 'Attendees must fill out this field to complete registration'
    };

    return (
        <div className="attendee-fields" style={{ maxWidth: '350px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '2em', marginBottom: '0.5em' }}>Attendee Registration</h1>
            <p style={{ color: '#646970', marginBottom: '2em' }}>
                Configure which fields are available during registration. Required fields must be filled out by the purchaser for each attendee.
            </p>
            
            <div className="field-section" style={{ marginBottom: '2em' }}>
                <ToggleGroupControl
                    label="Name"
                    value={nameState}
                    onChange={setNameState}
                    isBlock
                >
                    <ToggleGroupControlOption 
                        value="disable" 
                        icon={lock} 
                        label="Disable" 
                        aria-label={optionTooltips.disable}
                        showTooltip
                    />
                    <ToggleGroupControlOption 
                        value="enable" 
                        icon={unlock} 
                        label="Enable"
                        aria-label={optionTooltips.enable}
                        showTooltip
                    />
                    <ToggleGroupControlOption 
                        value="require" 
                        icon={starFilled} 
                        label="Require"
                        aria-label={optionTooltips.require}
                        showTooltip
                    />
                </ToggleGroupControl>
            </div>

            <div className="field-section" style={{ marginBottom: '2em' }}>
                <ToggleGroupControl
                    label="Email"
                    value={emailState}
                    onChange={setEmailState}
                    isBlock
                >
                    <ToggleGroupControlOption 
                        value="disable" 
                        icon={lock} 
                        label="Disable"
                        aria-label={optionTooltips.disable}
                        showTooltip
                    />
                    <ToggleGroupControlOption 
                        value="enable" 
                        icon={unlock} 
                        label="Enable"
                        aria-label={optionTooltips.enable}
                        showTooltip
                    />
                    <ToggleGroupControlOption 
                        value="require" 
                        icon={starFilled} 
                        label="Require"
                        aria-label={optionTooltips.require}
                        showTooltip
                    />
                </ToggleGroupControl>
            </div>

            <div className="field-section">
                <h2 style={{ fontSize: '1.5em', marginBottom: '1em' }}>Custom Registration Fields</h2>
                <div style={{ marginBottom: '0.5em' }}>
                    <SelectControl
                        placeholder="Select field type"
                        value={fieldType}
                        onChange={setFieldType}
                        options={[
                            { label: 'Select field type', value: '' },
                            { label: 'Text', value: 'text' },
                            { label: 'Textarea', value: 'textarea' },
                            { label: 'Number', value: 'number' },
                            { label: 'Checkbox', value: 'checkbox' },
                            { label: 'Radio', value: 'radio' },
                            { label: 'Select', value: 'select' },
                        ]}
                    />
                </div>
                <p style={{ color: '#646970', margin: 0, fontSize: '13px' }}>
                    or <a href="#" style={{ color: '#2271b1', textDecoration: 'none' }}>Create a new Field Set</a>
                </p>
            </div>
        </div>
    );
};

export default AttendeeFields; 
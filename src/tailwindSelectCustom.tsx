import { forwardRef, useImperativeHandle, useLayoutEffect, useRef } from "react";
import { Placeholder, Select, Suffix, type SelectObjectRef, type SelectProps } from "@cristianmpx/react-custom-select";
import './tailwindSelectCustom.css';
import './index.css';

export const TailwindSelect = forwardRef((props: SelectProps, ref) => {
    
    const selectRef = useRef<SelectObjectRef>(null);
    let selectProps = {...props};

    selectProps.placeholder ??= <Placeholder>Select...</Placeholder>

    useImperativeHandle(ref, () => selectRef, [props])

    useLayoutEffect(() => {
        if(!selectRef.current)
            return;

        const formbox = selectRef.current.formValueBoxElement;
        formbox?.classList.add('rounded-sm', 'border-gray-300', '!py-4.5', '!px-3');
        const optionBox = selectRef.current.optionBoxElement;
        optionBox?.classList.add('border-gray-200', 'rounded-sm', ); 
        setTimeout(() => {
            selectRef.current?.optionsRef?.forEach(e => {
                const el = e?.element;
                el?.classList.add('!py-2', '!px-3', )
            })
        }, 0);
    }, [props, selectRef.current?.optionsRef, selectRef.current?.valueRef])


    
    return <Select
        ref={selectRef}
        {...selectProps}        
    >        
        {selectProps.suffix ? selectProps.suffix : <Suffix className="icon-arrows-up-down"></Suffix>}
        {selectProps.children}
    </Select>
});
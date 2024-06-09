
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import React from 'react';

interface RadioItem {
    value: string
    title: string
}

interface RadioProps {
    value: string,
    label:string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    radioList: RadioItem[],
}

const RadioList = ({ value,label, handleChange, radioList }: RadioProps) => {
    return (
        <FormControl>
           { label && <FormLabel >{label}</FormLabel>}
            <RadioGroup
               
                value={value}
                onChange={handleChange}
                sx={{display:"flex",flexDirection:"row"}}
                
            >

                {
                    radioList?.length > 0 ? radioList.map((eachRadio) => (
                        <FormControlLabel value={eachRadio.value} control={<Radio />} label={eachRadio.title} />

                    )) : null
                }

            </RadioGroup>
        </FormControl>
    )
}

export default RadioList
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Options {
    title: string,
    value: string
}

interface SelectProps {
    label:string,
    value: string,
    handleChange: (e: SelectChangeEvent) => void,
    options: Options[]
}

export default function SelectOptions({label, value, handleChange, options }: SelectProps) {


    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label={label}
                    onChange={handleChange}
                >

                    {
                        options.length ? options.map((option: Options) => (
                            <MenuItem value={option.value}>{option.title}</MenuItem>
                        )):null
                    }

                  
                </Select>
            </FormControl>
        </Box>
    );
}

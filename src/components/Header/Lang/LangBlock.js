import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import './LangBlock.scss';
import { saveLanguage } from '../../../redux/language/languageActions';
import {connect, useDispatch} from 'react-redux';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 50,
        color: "white"

    },
    selectEmpty: {
        marginTop: theme.spacing(1),
    },
    icon:{
        color:'white'
    }

}));



const SimpleSelect = (props)=> {
    const {style,language} = props
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleChange = (event) => {
        dispatch(saveLanguage(event.target.value))
    };

    return (
        <div className = {style === 'language' ? 'language' : 'mobile'}>
            {style !== 'language' ? <p> Выберите язык:</p> : null}
            <LanguageIcon className={classes.icon} />
            <FormControl className={classes.formControl}>
                <Select
                    disableUnderline
                    value={language}
                    onChange={handleChange}
                    IconComponent={ExpandMoreIcon}
                    className={classes.icon}
                >
                    <MenuItem className={classes.icon} value={"RU"}>RU</MenuItem>
                    {/* <MenuItem value={"EN"}>EN</MenuItem> */}
                </Select>
            </FormControl>

        </div>
    );
}



const mapStateToProps = (state) => {
    return{
        language: state.language.language
    }
}

export default  connect(mapStateToProps)(SimpleSelect);




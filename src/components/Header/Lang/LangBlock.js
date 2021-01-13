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
        marginLeft: theme.spacing(1),
        // minWidth: 50,
        // marginRight: "30px",
        // width: "54px",
        // height: "24px"
    },

    selectEmpty: {
        marginTop: theme.spacing(1),
        color: "white",
    },
    icon:{
        color:'white',
        fontSize: "15px",
        fontWeight: "400",

        // width: "15px"
    },
    inputText: {
        fontSize: "14px"
    }

}));

// const expand = () => {
//     return (
// <FcExpand color='white'/>
//     )
// }


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
                    className={classes.icon}
                    disableUnderline
                    value={language}
                    onChange={handleChange}
                    IconComponent={ExpandMoreIcon}
                    inputProps={{
                        classes: {
                            icon: classes.icon,
                        },
                    }}
                    MenuProps = {{
                        classes: {

                        }
                    }}
                >
                    <MenuItem value={"RU"}><p className={classes.inputText}>RU</p></MenuItem>
                    <MenuItem value={"UK"}><p className={classes.inputText}>UA</p></MenuItem>
                    <MenuItem value={"EN"}><p className={classes.inputText}>EN</p></MenuItem>
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


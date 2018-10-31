import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { TextField, Typography } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";
import { emphasize } from "@material-ui/core/styles/colorManipulator";

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 250
  },
  input: {
    display: "flex",
    padding: 0
  },
  valueContainer: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "center",
    color: "black"
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  singleValue: {
    fontSize: 16
  },
  placeholder: {
    position: "absolute",
    left: 2,
    fontSize: 16,
    color: "black"
  },
  paper: {
    position: "absolute",
    zIndex: 4,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  divider: {
    height: theme.spacing.unit * 2
  }
});

function ValueContainer(props) {
  return (
    <div className={props.selectProps.classes.valueContainer}>
      {props.children}
    </div>
  );
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps
        }
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}

const components = {
  Control,
  ValueContainer,
  Placeholder
};

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue
    };
  }

  render() {
    const { classes, theme } = this.props;
    const selectStyles = {
      input: base => ({
        ...base,
        color: "black",
        "& input": {
          font: "inherit"
        }
      })
    };

    return (
      <Select
        textFieldProps={{
          disabled: true,
          label: this.props.label,
          InputLabelProps: {
            shrink: true
          },
          error: this.props.error,
          helperText: this.props.helperText
        }}
        classes={classes}
        components={components}
        styles={selectStyles}
        options={this.props.suggestions}
        onChange={value => this.props.onValueChange(value)}
        placeholder={this.props.placeholder}
      />
    );
  }
}

AutoComplete.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(AutoComplete);

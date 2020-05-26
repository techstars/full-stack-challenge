
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';

import useStyles from './SubmitButton.style';

export default function SubmitButton(props) {
  const { label, isSubmitting, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={classes.submitWrapper}>
      <Button
        color="primary"
        variant="contained"
        type="submit"
        aria-label={label}
        disabled={isSubmitting}
        {...rest}
      >
        {isSubmitting ? (<span>&nbsp;</span>) : label}
      </Button>
      {isSubmitting && (
        <CircularProgress
          size={24}
          className={classes.submitProgress}
          classes={{ circle: classes.submitProgressCircle }}
        />
      )}
    </div>
  );
};

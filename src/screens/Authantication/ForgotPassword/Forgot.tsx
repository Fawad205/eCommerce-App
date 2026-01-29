import {  Text, View } from 'react-native'
import React from 'react'
import { styles } from '../ForgotPassword/styles';
import InputFileds from '../../../components/commons/InputComp';
import SvgIcon from '../../../assets/svgs/SvgIcon';
import { Xmls } from '../../../assets/icons/Xmls';
import Button from '../../../components/commons/Button';
import { validateEmail } from '../../../utils/validators';


export default function Forgot( navigation:any) {
const [email,setEmail]=React.useState('');
const [emailError,setEmailError]=React.useState('');
  return (
    <View style={styles.container}>

    <View style={styles.heading  }>
      <Text style={styles.headingTxt} >Forgot Password?</Text>
    </View>

    {/* input filed */}
        <InputFileds 
        placeholder="Enter your email address"
        leftIcon={<SvgIcon xml={Xmls.email} />}
        value={email}
        onchangeText={(text) => {
          setEmail(text);
          setEmailError(validateEmail(text));
        }
      }
      error={emailError}
        />

        {/* text */}

        <Text style={styles.txt}>
            We send you a massage to set or reset
            your new password
        </Text>

        {/* Submit button */}

        <Button 
        text='Submit'
        onPress={()=>
        {
          const eErr = validateEmail(email);
          setEmailError(eErr);
          if(!eErr)
          {
            navigation.navigate('SignUp')
          }
        }
        }
        />

    </View>
  )
}


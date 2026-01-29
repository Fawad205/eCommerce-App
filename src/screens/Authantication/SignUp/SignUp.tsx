import {  Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../SignUp/styles';
import InputFileds from '../../../components/commons/InputComp';
import SvgIcon from '../../../assets/svgs/SvgIcon';
import { Xmls } from '../../../assets/icons/Xmls';
import { theme } from '../../../components/theme';
import Button from '../../../components/commons/Button';
import { Image } from 'react-native';
import { validateEmail, validateNewPassword, validateConfirmPassword } from '../../../utils/validators';



export default function SignUp({ navigation }: any) {

  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');

  const [newPassword, setNewPassword] = React.useState('');
  const [newPasswordError, setNewPasswordError] = React.useState('');

  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [confirmPasswordError, setConfirmPasswordError] = React.useState('');
   const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  
    const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

  return (
    <View style={styles.container}>

    <View style={styles.heading}>
      <Text style={styles.headingTxt} >Create an account</Text>
    </View>

    {/* input filed */}
        <InputFileds 
        placeholder="UserName or Email"
        leftIcon={<SvgIcon xml={Xmls.user} width={18} height={18}/>}

         value={email}
                onchangeText={(text) =>
                {
                  setEmail(text);
                  setEmailError(validateEmail(text));
                }}
                error={emailError}
        />

    <InputFileds
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}
           leftIcon={<SvgIcon xml={Xmls.lock} width={18} height={18} />}  
          rightIcon={
    <TouchableOpacity onPress={togglePasswordVisibility}>
      <SvgIcon xml={isPasswordVisible ? Xmls.eye : Xmls.closeye} />
    </TouchableOpacity>
  }
               value={newPassword}
                           onchangeText={(text) =>
                           {
                             setNewPassword(text);
                             setNewPasswordError(validateNewPassword(text));
                           }}
                           error={newPasswordError}
          />
        

   <InputFileds
            placeholder="Confirm Password"
            secureTextEntry={!isPasswordVisible}
          rightIcon={
    <TouchableOpacity onPress={togglePasswordVisibility}>
      <SvgIcon xml={isPasswordVisible ? Xmls.eye : Xmls.closeye} />
    </TouchableOpacity>
  }
          leftIcon={<SvgIcon xml={Xmls.lock} width={18} height={18} />}
          
          value={confirmPassword}
                      onchangeText={(text) =>
                      {
                        setConfirmPassword(text);
                        setConfirmPasswordError(validateConfirmPassword(newPassword, text));
                      }}
                      error={confirmPasswordError}
          />

    {/* text/ */}
        
        <Text style={styles.txt}>
  By clicking the{' '}
  <Text style={[styles.txtSign, { color:theme.colors.primary }]} >
    Register
  </Text>{' '}
  button, you agree to the public offer
</Text>


{/* CreateAccount bouttton */}

<Button 
text='Create Account'
onPress={() => {
            const eErr = validateEmail(email);
            const pErr = validateNewPassword(newPassword);
            setEmailError(eErr);
            setNewPasswordError(pErr);
            if (!eErr && !pErr) {
              navigation.navigate('AppStack');
            }
          }}
/>

 {/* links container */}
         <View style={styles.linksContainer}>
           <Text style={styles.txtAbove}> - OR Continue with -</Text>
           <View
             style={{
               flexDirection: 'row',
               marginTop: 10,
              gap: 10,
              alignItems: 'center',
              display: 'flex',
              justifyContent:'center',
               width: '30%',
             }}
           >
             <TouchableOpacity >
               <Image source={require('../../../assets/images/linksImages/google.png')} />
             </TouchableOpacity>
             <TouchableOpacity>
               <Image source={require('../../../assets/images/linksImages/apple.png')} />
             </TouchableOpacity>
             <TouchableOpacity>
               <Image source={require('../../../assets/images/linksImages/facebook.png')} />
             </TouchableOpacity>
           </View>
  
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Text style={styles.txt}>Create An Account </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={[styles.txtSign, { color: '#F83758' }]}>Log in</Text>
              </TouchableOpacity>
            </View>
          </View>

    </View>
  )
}


import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { styles } from './stylesIn';
import { Image } from 'react-native';
import Button from '../../../components/commons/Button';
import InputFileds from '../../../components/commons/InputComp';
import SvgIcon from '../../../assets/svgs/SvgIcon';
import { Xmls } from '../../../assets/icons/Xmls';
import { validateEmail, validatePassword } from '../../../utils/validators';



export default function SignIn({ navigation }: any) {

  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');

  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const togglePasswordVisibility = () => {
  setIsPasswordVisible(prev => !prev);
};


  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ScrollView  style={styles.container}>
        
        <View style={styles.heading}>
          <Text style={styles.headingTxt}>Welcome Back!</Text>
        </View>

        {/* input filed container */}
        
          <InputFileds 
        placeholder="UserName or Email"
        leftIcon={<SvgIcon xml={Xmls.user} /> }
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
  leftIcon={<SvgIcon xml={Xmls.lock} />}
  rightIcon={
    <TouchableOpacity onPress={togglePasswordVisibility}>
      <SvgIcon xml={isPasswordVisible ? Xmls.eye : Xmls.closeye} />
    </TouchableOpacity>
  }
   value={password}
            onchangeText={(text) =>
            {
              setPassword(text);
              setPasswordError(validatePassword(text));
            }}
            error={passwordError}

/>


        {/* forgot password text */}
        <View  style={{width: "100%",display:'flex',justifyContent:'center',alignItems:'flex-end',marginBottom:40 }} >
        <TouchableOpacity   onPress={() => navigation.navigate('Forgot')} >
        <Text style={styles.forgotPassword}
        >Forgot Password?</Text>
        </TouchableOpacity>
        </View>
        {/* login button filed */}

      
        <Button
          text="Login"
          onPress={() => {
            const eErr = validateEmail(email);
            const pErr = validatePassword(password);
            setEmailError(eErr);
            setPasswordError(pErr);
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
              width: '60%',
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
            <Text style={styles.txt}>Create An Account</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.txtSign}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

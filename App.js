import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Image,
  StatusBar,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Added for icons

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("splash"); // splash, login, home
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle login button press
  const handleLogin = () => {
    // Basic validation
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }

    // On successful login, navigate to home screen
    setCurrentScreen("home");
  };

  // Handle forgot password
  const handleForgotPassword = () => {
    Alert.alert(
      "Forgot Password",
      "Password reset link would be sent to your email"
    );
  };

  // Handle get started button
  const handleGetStarted = () => {
    setCurrentScreen("login");
  };

  // Handle logout
  const handleLogout = () => {
    setEmail("");
    setPassword("");
    setCurrentScreen("login");
  };

  const handleSignup = () => {
    alert("Signup clicked");
  };

  // Splash Screen
  if (currentScreen === "splash") {
    return (
      <SafeAreaView style={styles.splashContainer}>
        <StatusBar backgroundColor="#1a365d" barStyle="light-content" />
        <View style={styles.splashContent}>
          <Image
            source={require("./assets/logo.png")} // Replace with your actual logo path
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.splashTitle}>Welcome To</Text>
          <Text style={styles.splashSubtitle}>
            Create an account and access thousands of cool stuff
          </Text>
        </View>
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={handleGetStarted}
        >
          <Text style={styles.getStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  // Home Screen - Updated with a more stylish design
  if (currentScreen === "home") {
    return (
      <SafeAreaView style={styles.homeContainer}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <View style={styles.homeHeader}>
          <View style={styles.profileHeader}>
            <View>
              <Text style={styles.welcomeBack}>Welcome back,</Text>
              <Text style={styles.userName}>{email.split("@")[0]}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={handleLogout}>
            <Icon name="logout" size={24} color="#1a365d" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.homeContent}>
          {/* Stats Cards */}
          <View style={styles.statsContainer}>
            <View style={[styles.statCard, { backgroundColor: "#e6f2ff" }]}>
              <Icon name="chart-line" size={24} color="#1a365d" />
              <Text style={styles.statValue}>24</Text>
              <Text style={styles.statLabel}>Projects</Text>
            </View>
            <View style={[styles.statCard, { backgroundColor: "#ffe6e6" }]}>
              <Icon name="star" size={24} color="#d11a2a" />
              <Text style={styles.statValue}>98%</Text>
              <Text style={styles.statLabel}>Success</Text>
            </View>
          </View>

          {/* Recent Activity */}
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.activityCard}>
            <View style={styles.activityItem}>
              <View style={styles.activityIcon}>
                <Icon name="file-document" size={20} color="#1a365d" />
              </View>
              <View style={styles.activityText}>
                <Text style={styles.activityTitle}>Project Update</Text>
                <Text style={styles.activityTime}>2 hours ago</Text>
              </View>
            </View>
            <View style={styles.activityItem}>
              <View style={styles.activityIcon}>
                <Icon name="email" size={20} color="#1a365d" />
              </View>
              <View style={styles.activityText}>
                <Text style={styles.activityTitle}>New Message</Text>
                <Text style={styles.activityTime}>5 hours ago</Text>
              </View>
            </View>
          </View>

          {/* Quick Actions */}
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsContainer}>
            <TouchableOpacity style={styles.actionButton}>
              <View style={[styles.actionIcon, { backgroundColor: "#e6f2ff" }]}>
                <Icon name="plus" size={24} color="#1a365d" />
              </View>
              <Text style={styles.actionText}>New Project</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <View style={[styles.actionIcon, { backgroundColor: "#e6ffe6" }]}>
                <Icon name="account" size={24} color="#1a8d1a" />
              </View>
              <Text style={styles.actionText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <View style={[styles.actionIcon, { backgroundColor: "#fff2e6" }]}>
                <Icon name="cog" size={24} color="#e67c1a" />
              </View>
              <Text style={styles.actionText}>Settings</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // Login Screen with vector icons for show/hide password
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <View style={styles.loginContainer}>
          {/* App Logo */}
          <View style={styles.logoContainer}>
            <Image
              source={require("./assets/logo.png")} // Replace with your actual logo path
              style={styles.loginLogo}
              resizeMode="contain"
            />
          </View>

          {/* Header Text */}
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Log In Now</Text>
            <Text style={styles.subtitle}>
              Please login to continue using app{" "}
            </Text>
          </View>

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            {/* Email Input */}
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            {/* Password Input */}
            <View style={styles.inputWrapper}>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Password"
                  placeholderTextColor="#999"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.showPasswordButton}
                >
                  <Icon
                    name={showPassword ? "eye-off" : "eye"}
                    size={24}
                    color="#6b7280"
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={styles.linkText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          {/* Additional Links */}
          <View style={styles.linksContainer}>
            <View style={styles.signUpContainer}>
              <Text style={styles.signUpText}>Don't have an account? </Text>
              <TouchableOpacity onPress={handleSignup}>
                <Text style={styles.signUpLink}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // Splash Screen Styles (unchanged)
  splashContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
    paddingBottom: 40,
  },
  splashContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  splashTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1a365d",
    marginBottom: 8,
  },
  splashSubtitle: {
    fontSize: 16,
    color: "#a0aec0",
    textAlign: "center",
    marginHorizontal: 64,
  },
  getStartedButton: {
    backgroundColor: "#1a365d",
    borderRadius: 12,
    paddingVertical: 16,
    marginHorizontal: 32,
    alignItems: "center",
    marginBottom: 40,
  },
  getStartedButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },

  // Home Screen Styles - Updated
  homeContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  homeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  welcomeBack: {
    fontSize: 14,
    color: "#718096",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1a2937",
  },
  homeContent: {
    flex: 1,
    padding: 20,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  statCard: {
    width: "48%",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 5,
    color: "#1a365d",
  },
  statLabel: {
    fontSize: 14,
    color: "#718096",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1a2937",
    marginBottom: 15,
  },
  activityCard: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f1f1",
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f1f8ff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  activityText: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    color: "#1a2937",
  },
  activityTime: {
    fontSize: 12,
    color: "#718096",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  actionButton: {
    alignItems: "center",
    width: "30%",
  },
  actionIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  actionText: {
    fontSize: 14,
    color: "#1a2937",
    textAlign: "center",
  },

  // Login Screen Styles (updated with icon styles)
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  keyboardView: {
    flex: 1,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  loginLogo: {
    width: 100,
    height: 100,
  },
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#6b7280",
  },
  inputContainer: {
    marginBottom: 32,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 20,
    color: "#1f2937",
    height: 60,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 12,
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 20,
    color: "#1f2937",
    height: 60,
  },
  showPasswordButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  loginButton: {
    backgroundColor: "#1a365d",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 32,
  },
  loginButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  linksContainer: {
    alignItems: "center",
  },
  linkText: {
    color: "#1a365d",
    fontSize: 16,
    marginBottom: 16,
    marginLeft: 160,
    marginTop: 16,
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  signUpText: {
    color: "#6b7280",
    fontSize: 16,
  },
  signUpLink: {
    color: "#1a365d",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default App;

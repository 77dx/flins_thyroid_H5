from PIL import Image
import pytesseract

#识别没有干扰的验证码
text_chi = pytesseract.image_to_string(Image.open('images/test.bmp'))
print(text_chi)

#提取图片中的中文汉字
text_eng = pytesseract.image_to_string(Image.open('images/flins_dx.png'),lang='chi_sim')
# print(text_eng)

#将图片转换为灰度,就是把图片背景变成灰色的
image = Image.open('images/yanzhengma.png').convert("L")
check_code = pytesseract.image_to_string(image)
image.show()
print(check_code)

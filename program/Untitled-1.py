
def calculate_net_salary(salary):
    if salary < 100000:
        tax_percentage = 0.35
    else:
        tax_percentage = 0.45
    
    tax_amount = salary * tax_percentage
    net_salary = salary - tax_amount
    
    return net_salary

while True:
    try:
        salary = float(input("Введите ваш оклад: "))
        net_salary = calculate_net_salary(salary)
        print("Ваша чистая зарплата: ", net_salary)
        new_calculation = input("Хотите произвести новый расчет? (да/нет): ")
        
        if new_calculation.lower() != "да":
            break
    except ValueError:
        print("Ошибка! Введите числовое значение для оклада.")
        continue


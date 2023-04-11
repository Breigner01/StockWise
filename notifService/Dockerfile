FROM python:3.11.2-alpine3.17

WORKDIR /notifService

COPY requirements.txt .
RUN python -m pip install -r requirements.txt

COPY . .

CMD ["sh", "-c", "python manage.py makemigrations && python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]